import React, { useLayoutEffect, useRef } from 'react';
import { NativeModules, Platform, TouchableOpacity } from 'react-native';
import type { ArgsType, onErrorType, onSuccessType } from './@types/ArgsType';

import InstructionsView from './screens/Documentscopy/InstructionsView';
import InstructionsView2D from './screens/Liveness2D/InstructionsView';
import PermissionView from './screens/PermissionView';

import { DocCoreProvider, useDocCoreContext } from './contexts/DocCoreContext';
import {
  FaceCaptchaProvider,
  useFaceCaptchaContext,
} from './contexts/FaceCaptchaContext';

import type { OitiBackButtonInterface } from './interfaces/OitiBackButtonInterface';
import type { OitiPermissionButtonInterface } from './interfaces/OitiBackButtonInterface copy';
import type { OitiContinueButtonInterface } from './interfaces/OitiContinueButton';

import { DocCoreHelper } from './helpers/DocCoreHelper';
import { FaceCaptchaHelper } from './helpers/FaceCaptchaHelper';
import { continueButton } from './utils/continueButton';

const LINKING_ERROR =
  `The package '@oiti/rn-liveness2d' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const OitiReactNative = NativeModules.OitiReactNative
  ? NativeModules.OitiReactNative
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function startFaceCaptcha(options?: ArgsType): Promise<any> {
  let args: ArgsType = {
    appkey: options?.appkey === undefined ? '' : options?.appkey,
    ticket: options?.appkey === undefined ? '' : options?.ticket,
    environment:
      options?.environment === undefined ? 'HML' : options?.environment,
  };
  if (Platform.OS === 'android') {
    return OitiReactNative.startfacecaptcha(args.appkey, args.environment);
  }
  return OitiReactNative.startfacecaptcha(args);
}

export function startDocumentscopy(
  options?: ArgsType
): Promise<onSuccessType | string> {
  const args: ArgsType = {
    appkey: options?.appkey === undefined ? '' : options?.appkey,
    ticket: options?.appkey === undefined ? '' : options?.ticket,
    environment:
      options?.environment === undefined ? 'HML' : options?.environment,
    nativeCustom:
      options?.nativeCustom === false ? false : options?.nativeCustom,
    theme: options?.theme === undefined ? null : options?.theme,
  };

  if (Platform.OS === 'android') {
    return OitiReactNative.startdocumentscopy(
      args.appkey,
      args.ticket,
      args.theme,
      args.nativeCustom,
      args.environment
    );
  }

  return OitiReactNative.startdocumentscopy(args);
}

export function GetIntructionView2d({
  CustomInstructionView,
  CustomPermissionView,
}: {
  CustomInstructionView?: any | null;
  CustomPermissionView?: any | null;
}) {
  const {
    screen,
    options,
    setScreen,
    startLiveness2d,
    onBack,
    onAskPermission,
  } = useFaceCaptchaContext();

  function onContinue() {
    continueButton().then((result) => {
      result === true && startLiveness2d();
      result === false && setScreen(2);
    });
  }
  useLayoutEffect(() => {
    setTimeout(() => {
      options?.nativeCustom && startLiveness2d();
    }, 1);
  }, [options, startLiveness2d]);

  return (
    <>
      {screen === 1 &&
        (!CustomInstructionView ? (
          <InstructionsView2D onContinue={onContinue} onBack={onBack} />
        ) : (
          CustomInstructionView
        ))}
      {screen === 2 &&
        (!CustomPermissionView ? (
          <PermissionView onVerify={() => onAskPermission()} onBack={onBack} />
        ) : (
          CustomPermissionView
        ))}
    </>
  );
}

export function GetIntructionViewDoc({
  CustomInstructionView,
  CustomPermissionView,
}: {
  CustomInstructionView?: Element | null;
  CustomPermissionView?: Element | null;
}) {
  const { screen, options, setScreen, startDocCore, onBack, onAskPermission } =
    useDocCoreContext();

  function onContinue() {
    continueButton().then((result) => {
      result === true && startDocCore();
      result === false && setScreen(2);
    });
  }
  useLayoutEffect(() => {
    setTimeout(() => {
      options?.nativeCustom && startDocCore();
    }, 1);
  }, [options, startDocCore]);

  return (
    <>
      {options?.nativeCustom ? (
        <></>
      ) : (
        <>
          {screen === 1 &&
            (!CustomInstructionView ? (
              <InstructionsView onContinue={onContinue} onBack={onBack} />
            ) : (
              CustomInstructionView
            ))}
          {screen === 2 &&
            (!CustomPermissionView ? (
              <PermissionView
                onVerify={() => onAskPermission()}
                onBack={onBack}
              />
            ) : (
              CustomPermissionView
            ))}
        </>
      )}
    </>
  );
}

export function Liveness2dView({
  CustomInstructionView,
  CustomPermissionView,
  options,
  navigation,
  callbackView,
  onSuccess,
  onError,
}: {
  CustomInstructionView?: any | null;
  CustomPermissionView?: any | null;
  options: any;
  navigation: any;
  callbackView: string;
  onSuccess: (result: string) => void;
  onError: (error: onErrorType) => void;
}) {
  return (
    <FaceCaptchaProvider onSuccess={onSuccess} onError={onError}>
      <FaceCaptchaHelper
        options={options}
        navigation={navigation}
        callBackView={callbackView}
        onError={onError}
      >
        <GetIntructionView2d
          CustomInstructionView={CustomInstructionView}
          CustomPermissionView={CustomPermissionView}
        />
      </FaceCaptchaHelper>
    </FaceCaptchaProvider>
  );
}

export function DocumentsCopyView({
  CustomInstructionView,
  CustomPermissionView,
  options,
  navigation,
  callbackView,
  onSuccess,
  onError,
}: {
  CustomInstructionView?: Element | null;
  CustomPermissionView?: Element | null;
  options: ArgsType;
  navigation: any;
  callbackView: string;
  onSuccess: (result: string) => void;
  onError: (error: onErrorType) => void;
}) {
  return (
    <DocCoreProvider onSuccess={onSuccess} onError={onError}>
      <DocCoreHelper
        options={options}
        navigation={navigation}
        callBackView={callbackView}
        onError={onError}
      >
        <GetIntructionViewDoc
          CustomInstructionView={CustomInstructionView}
          CustomPermissionView={CustomPermissionView}
        />
      </DocCoreHelper>
    </DocCoreProvider>
  );
}

export const DocCoreContinueButton: React.FC<OitiContinueButtonInterface> = ({
  children,
  ...props
}) => {
  const touchableOpacityRef = useRef(null);
  const { setScreen, startDocCore } = useDocCoreContext();

  function onContinue() {
    continueButton().then((result) => {
      result === true && startDocCore();
      result === false && setScreen(2);
    });
  }

  const handlePress = () => {
    onContinue();
  };

  return (
    <TouchableOpacity
      ref={touchableOpacityRef}
      onPress={handlePress}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

export const DocCoreBackButton: React.FC<OitiBackButtonInterface> = ({
  children,
  ...props
}) => {
  const touchableOpacityRef = useRef(null);
  const { onBack } = useDocCoreContext();

  const handlePress = () => {
    onBack();
  };

  return (
    <TouchableOpacity
      ref={touchableOpacityRef}
      onPress={handlePress}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

export const DocCorePermissionButton: React.FC<
  OitiPermissionButtonInterface
> = ({ children, ...props }) => {
  const touchableOpacityRef = useRef(null);
  const { onAskPermission } = useDocCoreContext();

  const handlePress = () => {
    onAskPermission();
  };

  return (
    <TouchableOpacity
      ref={touchableOpacityRef}
      onPress={handlePress}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

export const FaceCaptchaContinueButton: React.FC<
  OitiContinueButtonInterface
> = ({ children, ...props }) => {
  const touchableOpacityRef = useRef(null);
  const { setScreen, startLiveness2d } = useFaceCaptchaContext();

  function onContinue() {
    continueButton().then((result) => {
      result === true && startLiveness2d();
      result === false && setScreen(2);
    });
  }

  const handlePress = () => {
    onContinue();
  };

  return (
    <TouchableOpacity
      ref={touchableOpacityRef}
      onPress={handlePress}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

export const FaceCaptchaBackButton: React.FC<OitiBackButtonInterface> = ({
  children,
  ...props
}) => {
  const touchableOpacityRef = useRef(null);
  const { onBack } = useFaceCaptchaContext();

  const handlePress = () => {
    onBack();
  };

  return (
    <TouchableOpacity
      ref={touchableOpacityRef}
      onPress={handlePress}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

export const FaceCaptchaPermissionButton: React.FC<
  OitiPermissionButtonInterface
> = ({ children, ...props }) => {
  const touchableOpacityRef = useRef(null);
  const { onAskPermission } = useFaceCaptchaContext();

  const handlePress = () => {
    onAskPermission();
  };

  return (
    <TouchableOpacity
      ref={touchableOpacityRef}
      onPress={handlePress}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};
