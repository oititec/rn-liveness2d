import type { onErrorType } from '../ArgsType';

export type ResultType = {
  onSuccess: (result: string) => void;
  onError: (error: onErrorType) => void;
};
