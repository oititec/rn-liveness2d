import type { ArgsType, onErrorType } from 'src/@types/ArgsType';

export interface FaceCaptchaHelperInterface {
  options: ArgsType;
  navigation: any;
  callBackView: string;
  onError: (error: onErrorType) => void;
}
