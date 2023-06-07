import { DEFAULT_SLEEP_MS } from 'lib/constants';

export const sleep = async (ms: number = DEFAULT_SLEEP_MS) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const handleError = (error: any) => {
  const msg = error?.message ?? 'Something went wrong';
  console.log('msg', msg);
  return msg;
};
