import { startDocumentscopy } from '../index';
import React, { createContext, FC, useContext, useState } from 'react';
import type { ArgsType, onErrorType } from 'src/@types/ArgsType';
import type { ResultDocType } from 'src/@types/DocCore/ResultTypes';
import { askPermission } from '../utils/permissions';

export const SCREEN = Object.freeze({
  INSTRUCTION_VIEW: 1,
  PERMISSION_VIEW: 2,
} as const);

interface DocCoreContextType {
  screen: number;
  setScreen: React.Dispatch<React.SetStateAction<number>>;
  navigation: any;
  setNavigation: React.Dispatch<React.SetStateAction<any>>;
  options: ArgsType | undefined;
  setOptions: React.Dispatch<React.SetStateAction<ArgsType | undefined>>;
  onDocCoreError: (error: onErrorType) => void;
  onDocCoreSuccess: (result: string) => void;
  onBack: () => any;
  startDocCore: () => any;
  onAskPermission: () => any;
  callbackView: string;
  setCallbackView: React.Dispatch<React.SetStateAction<string>>;
}

const DocCoreContext = createContext<DocCoreContextType | undefined>(undefined);

export const DocCoreProvider: FC<ResultDocType> = ({
  children,
  onError,
  onSuccess,
}) => {
  const [screen, setScreen] = useState<number>(1);
  const [navigation, setNavigation] = useState<any>();
  const [options, setOptions] = useState<ArgsType>();
  const [callbackView, setCallbackView] = useState<string>('');

  const onDocCoreError = (error: onErrorType) => {
    onError(error);
  };

  const onDocCoreSuccess = (result: string) => {
    onSuccess(result);
  };

  function onBack() {
    switch (screen) {
      case SCREEN.INSTRUCTION_VIEW:
        navigation.goBack(null);
        onDocCoreError({ code: '0', message: 'RESULT_CANCELED' });
        break;
      case SCREEN.PERMISSION_VIEW:
        setScreen(1);
        break;
    }
  }

  function startDocCore() {
    startDocumentscopy(options)
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
      result === true && startDocCore();
      result === false && setScreen(1);
    });
  }

  const contextValue: DocCoreContextType = {
    screen,
    setScreen,
    navigation,
    setNavigation,
    onDocCoreError,
    onDocCoreSuccess,
    onBack,
    options,
    setOptions,
    startDocCore,
    onAskPermission,
    callbackView,
    setCallbackView,
  };

  return (
    <DocCoreContext.Provider value={contextValue}>
      {children}
    </DocCoreContext.Provider>
  );
};

export const useDocCoreContext = (): DocCoreContextType => {
  const context = useContext(DocCoreContext);
  if (!context) {
    throw new Error('useDocCoreContext must be used within a DocCoreProvider');
  }
  return context;
};

export default DocCoreContext;
