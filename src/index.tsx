import React, { FC, useEffect, useLayoutEffect, useRef, useState } from 'react';
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
    nativeCustom:
      options?.nativeCustom === false ? false : options?.nativeCustom,
    theme: options?.theme === undefined ? null : options?.theme,
  };
  console.log(args);
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

interface DocCoreHelperInterfae {
  options: ArgsType;
  navigation: any;
  callBackView: string;
  onError: (error: onErrorType) => void;
}

const DocCoreHelper: FC<DocCoreHelperInterfae> = ({
  children,
  options,
  navigation,
  callBackView,
  onError,
}) => {
  const { setNavigation, setOptions, setCallbackView } = useDocCoreContext();

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
  }, [
    options,
    navigation,
    callBackView,
    onError,
    setNavigation,
    setOptions,
    setCallbackView,
  ]);

  return <>{children}</>;
};

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
