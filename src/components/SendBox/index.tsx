import { BigNumber } from '@ethersproject/bignumber';
import { formatUnits } from '@ethersproject/units';
import { Box, Link, Typography } from '@mui/material';
import { useWeb3React } from '@web3-react/core';
import _ from 'lodash';
import React, { useMemo } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { Tokens } from '../../constants';
import { useApproveStatus } from '../../hooks/approve/useApproveStatus';
import { ApproveStatus, typeInput, useAppDispatch, useAppSelector, useUsdStablecoins } from '../../store';
import { Field } from '../../types';
import { bigFloatToFixed } from '../../utils';
import { AuxButton, SelectTokenButton } from '../buttons';
import { InputAmount } from '../fields';
import { LockerIcon } from '../icons';
import SkeletonText from '../SkeletonText';

interface SendBoxProps {
  onSelectToken: () => void;
}

const SendBox = ({ onSelectToken }: SendBoxProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { account } = useWeb3React();
  const { INPUT, typedValue, inputTokenPriceInUsd, loadingQuote, explorer, txFee, lastQuoteUpdateTimestamp } =
    useAppSelector((state) => ({
      INPUT: state.tokens.tokens[state.swap.INPUT],
      typedValue: state.swap.typedValue,
      inputTokenPriceInUsd: state.tokens.usdPrices[state.swap.INPUT],
      loadingQuote: state.swap.loadingQuote,
      explorer: state.user.explorer,
      txFee: state.swap.txFees[state.swap.selectedMethod],
      lastQuoteUpdateTimestamp: state.swap.lastQuoteUpdateTimestamp,
    }));
  const { defaultStablecoin } = useUsdStablecoins();

  const status = useApproveStatus();

  const tokenInBalance = useMemo(() => {
    if (_.isEmpty(INPUT)) return;
    if (account && !INPUT?.userBalance) return;
    if (!Number(INPUT?.userBalance)) return '0';
    return bigFloatToFixed(formatUnits(INPUT.userBalance || '0', INPUT.decimals), 6);
  }, [account, INPUT?.address, INPUT?.userBalance]);

  const valueInUsd = useMemo(
    () =>
      inputTokenPriceInUsd && typedValue && !_.isEmpty(INPUT) && defaultStablecoin?.decimals
        ? bigFloatToFixed(
            formatUnits(
              BigNumber.from(typedValue).mul(BigNumber.from(inputTokenPriceInUsd)),
              INPUT.decimals + defaultStablecoin.decimals
            ),
            4
          )
        : '',
    [INPUT, inputTokenPriceInUsd, lastQuoteUpdateTimestamp]
  );

  const onMaxClick = () => {
    const bal = INPUT.userBalance;
    if (!Number(bal) || !Number(txFee)) {
      return;
    }
    let maxAmount = BigNumber.from(bal);
    if (INPUT.address === Tokens.INCH_NATIVE_TOKEN_ADDRESS) {
      maxAmount = maxAmount.sub(txFee as string); // txFee is validated 3 lines above
    }
    dispatch(
      typeInput({
        field: Field.INPUT,
        typedValue: maxAmount.toString(),
      })
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        bgcolor: 'widget.bg-01',
        flexDirection: 'column',
        padding: '15px',
        borderRadius: '16px',
      }}>
      <Box
        sx={{
          justifyContent: 'space-between',
          display: 'flex',
          alignItems: 'center',
          height: '19px',
        }}>
        <Link
          target="_blank"
          sx={{
            typography: 'rxs12',
            color: 'widget.text-secondary',
          }}
          href={explorer && INPUT && `${explorer.link}/token/${INPUT.address}`}
          underline="hover">
          <Trans>You sell</Trans>
        </Link>
        {account &&
          (tokenInBalance ? (
            <Box sx={{ display: 'flex', columnGap: '4px' }}>
              <Typography
                variant="rxs12"
                sx={{
                  color: 'widget.text-secondary',
                  lineHeight: '19px',
                }}>
                <Trans>Balance</Trans>: {tokenInBalance}
              </Typography>
              <AuxButton onClick={onMaxClick} text={t('Max')} sx={{ lineHeight: '19px' }} />
            </Box>
          ) : (
            <SkeletonText height="19px" bgcolor="widget.skeleton-01" />
          ))}
      </Box>

      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          margin: '0 0 6px -9px',
          height: '48px',
        }}>
        <SelectTokenButton onClick={onSelectToken} field={Field.INPUT} />
        <Box sx={{ ml: '8px' }}>{status === ApproveStatus.APPROVAL_NEEDED && <LockerIcon />}</Box>
        <InputAmount inputId={Field.INPUT} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <Typography variant="rxs12" sx={{ color: 'widget.text-secondary' }}>
          {INPUT?.name}
        </Typography>
        {valueInUsd && loadingQuote === 'succeeded' ? (
          <Typography variant="rxs12" lineHeight="19px" color="widget.text-secondary">
            ~$
            {valueInUsd}
          </Typography>
        ) : (
          <SkeletonText height="19px" bgcolor="widget.skeleton-01" />
        )}
      </Box>
    </Box>
  );
};

export default SendBox;
