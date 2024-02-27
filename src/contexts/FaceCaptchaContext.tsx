import { startFaceCaptcha } from '../index';
import React, { createContext, FC, useContext, useState } from 'react';
import type { ArgsType, onErrorType } from 'src/@types/ArgsType';
import type { ResultType } from 'src/@types/FaceCaptcha/ResultTypes';
import { askPermission } from '../utils/permissions';

export const SCREEN = Object.freeze({
  INSTRUCTION_VIEW: 1,
  PERMISSION_VIEW: 2,
} as const);

interface FaceCaptchaContextType {
  screen: number;
  setScreen: React.Dispatch<React.SetStateAction<number>>;
  navigation: any;
  setNavigation: React.Dispatch<React.SetStateAction<any>>;
  options: ArgsType | undefined;
  setOptions: React.Dispatch<React.SetStateAction<ArgsType | undefined>>;
  onFaceCaptchaError: (error: onErrorType) => void;
  onFaceCaptchaSuccess: (result: string) => void;
  onBack: () => any;
  startLiveness2d: () => any;
  onAskPermission: () => any;
  callbackView: string;
  setCallbackView: React.Dispatch<React.SetStateAction<string>>;
}

const FaceCaptchaContext = createContext<FaceCaptchaContextType | undefined>(
  undefined
);

export const FaceCaptchaProvider: FC<ResultType> = ({
  children,
  onError,
  onSuccess,
}) => {
  const [screen, setScreen] = useState<number>(1);
  const [navigation, setNavigation] = useState<any>();
  const [options, setOptions] = useState<ArgsType>();
  const [callbackView, setCallbackView] = useState<string>('');

  const onFaceCaptchaError = (error: onErrorType) => {
    onError(error);
  };

  const onFaceCaptchaSuccess = (result: string) => {
    onSuccess(result);
  };

  function onBack() {
    switch (screen) {
      case SCREEN.INSTRUCTION_VIEW:
        navigation.goBack(null);
        onFaceCaptchaError({ code: '0', message: 'RESULT_CANCELED' });
        break;
      case SCREEN.PERMISSION_VIEW:
        setScreen(1);
        break;
    }
  }

  function startLiveness2d() {
    startFaceCaptcha(options)
      .then((result) => {
        onSuccess(result as string);
      })
      .catch((error) => {
        onError(error as onErrorType);
      })
      .finally(() => {
        navigation.navigate(callbackView);
      });
  }

  function onAskPermission() {
    askPermission().then((result) => {
      result === true && startLiveness2d();
      result === false && setScreen(1);
    });
  }

  const contextValue: FaceCaptchaContextType = {
    screen,
    setScreen,
    navigation,
    setNavigation,
    onFaceCaptchaError,
    onFaceCaptchaSuccess,
    onBack,
    options,
    setOptions,
    startLiveness2d,
    onAskPermission,
    callbackView,
    setCallbackView,
  };

  return (
    <FaceCaptchaContext.Provider value={contextValue}>
      {children}
    </FaceCaptchaContext.Provider>
  );
};

export const useFaceCaptchaContext = (): FaceCaptchaContextType => {
  const context = useContext(FaceCaptchaContext);
  if (!context) {
    throw new Error(
      'useFaceCaptchaContext must be used within a FaceCaptchaProvider'
    );
  }
  return context;
};

export default FaceCaptchaContext;
