import React, { useEffect, useRef, useState } from 'react';
import { NativeModules, Platform, TouchableOpacity } from 'react-native';
import type { ArgsType, onErrorType, onSuccessType } from './@types/ArgsType';

import InstructionsView from './screens/Documentscopy/InstructionsView';
import InstructionsView2D from './screens/Liveness2D/InstructionsView';
import PermissionView from './screens/PermissionView';

import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { DocCoreProvider, useDocCoreContext } from './contexts/DocCoreContext';

import type { OitiContinueButtonInterface } from './interfaces/OitiContinueButton';
import type { OitiBackButtonInterface } from './interfaces/OitiBackButtonInterface';
import { SCREEN } from './utils/screenStore';
import { verifyPermission } from './utils/permissions';
import type { OitiPermissionButtonInterface } from './interfaces/OitiBackButtonInterface copy';

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

export function startFaceCaptcha(options: ArgsType): Promise<any> {
  let args: ArgsType = {
    appkey: options?.appkey === undefined ? '' : options?.appkey,
    ticket: options?.appkey === undefined ? '' : options?.ticket,
    environment:
      options?.environment === undefined ? 'HML' : options?.environment,
    apparence: {
      backgroundColor:
        options?.apparence?.backgroundColor === ''
          ? '#1E1E1E'
          : options?.apparence?.backgroundColor,
      loadingColor:
        options?.apparence?.loadingColor === ''
          ? '#05D758'
          : options?.apparence?.loadingColor,
    },
  };

  if (Platform.OS === 'android') {
    return OitiReactNative.startfacecaptcha(args.appkey);
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
    apparence: {
      backgroundColor:
        options?.apparence?.backgroundColor === ''
          ? '#1E1E1E'
          : options?.apparence?.backgroundColor,
      loadingColor:
        options?.apparence?.loadingColor === ''
          ? '#05D758'
          : options?.apparence?.loadingColor,
    },
    nativeCustom:
      options?.nativeCustom === false ? false : options?.nativeCustom,
    theme: options?.theme === undefined ? null : options?.theme,
  };

  if (Platform.OS === 'android') {
    return OitiReactNative.startdocumentscopy(args.appkey, args.ticket);
  }

  return OitiReactNative.startdocumentscopy(args);
}

export function GetIntructionView2d({
  CustomInstructionView,
  CustomPermissionView,
  options,
  navigation,
  callBackView,
}: {
  CustomInstructionView?: any | null;
  CustomPermissionView?: any | null;
  options: ArgsType;
  navigation: any;
  callBackView: string;
}) {
  const [screen, setScreen] = useState(1);

  function onBack() {
    switch (screen) {
      case SCREEN.INSTRUCTION_VIEW:
        navigation.goBack(null);
        break;
      case SCREEN.PERMISSION_VIEW:
        setScreen(1);
        break;
    }
  }

  function verifyPermission() {
    Platform.OS === 'ios'
      ? check(PERMISSIONS.IOS.CAMERA)
          .then((result) => {
            switch (result) {
              case RESULTS.UNAVAILABLE:
                console.log(
                  'This feature is not available (on this device / in this context)'
                );
                break;
              case RESULTS.DENIED:
                console.log(
                  'The permission has not been requested / is denied but requestable'
                );
                if (screen === 1) {
                  setScreen(2);
                } else {
                  request(PERMISSIONS.IOS.CAMERA).then(() => {
                    startFaceCaptcha(options).then(
                      (result: string) => {
                        console.log(result);
                        navigation.navigate(callBackView);
                      },
                      (error: string) => {
                        console.log(error);
                        navigation.navigate(callBackView);
                      }
                    );
                  });
                }
                break;
              case RESULTS.LIMITED:
                console.log(
                  'The permission is limited: some actions are possible'
                );
                break;
              case RESULTS.GRANTED:
                startFaceCaptcha(options).then(
                  (result: string) => {
                    console.log(result);
                    navigation.navigate(callBackView);
                  },
                  (error: string) => {
                    console.log(error);
                    navigation.navigate(callBackView);
                  }
                );
                break;
              case RESULTS.BLOCKED:
                console.log(
                  'The permission is denied and not requestable anymore'
                );
                setScreen(2);
                break;
            }
          })
          .catch((error) => {
            console.log('Error: ' + error);
          })
      : check(PERMISSIONS.ANDROID.CAMERA)
          .then((result) => {
            switch (result) {
              case RESULTS.UNAVAILABLE:
                console.log(
                  'This feature is not available (on this device / in this context)'
                );
                break;
              case RESULTS.DENIED:
                console.log(
                  'The permission has not been requested / is denied but requestable'
                );
                if (screen === 1) {
                  setScreen(2);
                } else {
                  request(PERMISSIONS.ANDROID.CAMERA).then(() => {
                    startFaceCaptcha(options).then(
                      (result: string) => {
                        console.log(result);
                        navigation.navigate(callBackView);
                      },
                      (error: string) => {
                        console.log(error);
                        navigation.navigate(callBackView);
                      }
                    );
                  });
                }
                break;
              case RESULTS.LIMITED:
                console.log(
                  'The permission is limited: some actions are possible'
                );
                break;
              case RESULTS.GRANTED:
                startFaceCaptcha(options).then(
                  (result: string) => {
                    console.log(result);
                    navigation.navigate(callBackView);
                  },
                  (error: string) => {
                    console.log(error);
                    navigation.navigate(callBackView);
                  }
                );
                break;
              case RESULTS.BLOCKED:
                console.log(
                  'The permission is denied and not requestable anymore'
                );
                setScreen(2);
                break;
            }
          })
          .catch((error) => {
            console.log('Error: ' + error);
          });
  }

  return (
    <>
      {screen === 1 &&
        (!CustomInstructionView ? (
          <InstructionsView2D onVerify={verifyPermission} onBack={onBack} />
        ) : (
          CustomInstructionView
        ))}

      {screen === 2 &&
        (!CustomPermissionView ? (
          <PermissionView onVerify={verifyPermission} onBack={onBack} />
        ) : (
          CustomPermissionView
        ))}
    </>
  );
}

export const continueButton = async (): Promise<boolean> => {
  return verifyPermission()
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
      return false;
    });
};

export function GetIntructionViewDoc({
  CustomInstructionView,
  CustomPermissionView,
  options,
  navigation,
  callBackView,
  onError,
}: {
  CustomInstructionView?: Element | null;
  CustomPermissionView?: Element | null;
  options: ArgsType;
  navigation: any;
  callBackView: string;
  onSuccess: (result: string) => void;
  onError: (error: onErrorType) => void;
}) {
  const {
    screen,
    setScreen,
    setNavigation,
    setOptions,
    startDocCore,
    onBack,
    onAskPermission,
    setCallbackView,
  } = useDocCoreContext();

  function onContinue() {
    continueButton().then((result) => {
      result === true && startDocCore();
      result === false && setScreen(2);
    });
  }

  useEffect(() => {
    if (
      options.appkey === null ||
      options.appkey === undefined ||
      options.appkey === ''
    ) {
      navigation.navigate(callBackView);
      onError({ code: '0', message: 'invalidAppKey' });
    }
    setNavigation(navigation);
    setCallbackView(callBackView);
    setOptions(options);
  }, []);

  return (
    <>
      {screen === 1 &&
        (!CustomInstructionView ? (
          <InstructionsView onContinue={onContinue} onBack={onBack} />
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

export function Liveness2dView({
  CustomInstructionView,
  CustomPermissionView,
  options,
  navigation,
  callbackView,
}: {
  CustomInstructionView?: any | null;
  CustomPermissionView?: any | null;
  options: any;
  navigation: any;
  callbackView: string;
}) {
  return (
    <GetIntructionView2d
      CustomInstructionView={CustomInstructionView}
      CustomPermissionView={CustomPermissionView}
      options={options}
      navigation={navigation}
      callBackView={callbackView}
    />
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
  options: any;
  navigation: any;
  callbackView: string;
  onSuccess: (result: string) => void;
  onError: (error: onErrorType) => void;
}) {
  return (
    <DocCoreProvider onSuccess={onSuccess} onError={onError}>
      <GetIntructionViewDoc
        CustomInstructionView={CustomInstructionView}
        CustomPermissionView={CustomPermissionView}
        options={options}
        navigation={navigation}
        callBackView={callbackView}
        onSuccess={onSuccess}
        onError={onError}
      />
    </DocCoreProvider>
  );
}

export const OitiContinueButton: React.FC<OitiContinueButtonInterface> = ({
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

export const OitiBackButton: React.FC<OitiBackButtonInterface> = ({
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

export const OitiPermissionButton: React.FC<OitiPermissionButtonInterface> = ({
  children,
  ...props
}) => {
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
