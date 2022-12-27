import { Provider, TransactionRequest } from '@ethersproject/providers';

import { networkConfigs } from '../constants';
import { calculateGasMargin } from '../utils';

export const estimateGas = async (tx: TransactionRequest, library: Provider, chainId: number): Promise<string> => {
  try {
    return calculateGasMargin(await library.estimateGas(tx)).toString();
  } catch (e) {
    console.error('ESTIMATE GAS LIMIT FAILED! Tx:', tx);
    console.error(e);
    console.log('SETTING DEFAULT GAS LIMIT...');
    return getDefaultGasLimit(chainId);
  }
};

export const getDefaultGasLimit = (chainId: number): string => {
  return networkConfigs[chainId].minGasLimit;
};
