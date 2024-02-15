import type { onErrorType } from '../ArgsType';

export type ResultDocType = {
  onSuccess: (result: string) => void;
  onError: (error: onErrorType) => void;
};
