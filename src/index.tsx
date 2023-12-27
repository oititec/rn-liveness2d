import React, { useState } from 'react';
import { NativeModules, Platform } from 'react-native';
import type { ArgsType } from './@types/ArgsType';

import InstructionsView from './screens/Documentscopy/InstructionsView';
import InstructionsView2D from './screens/Liveness2D/InstructionsView';
import PermissionView from './screens/PermissionView';

import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

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

const SCREEN = Object.freeze({
  INSTRUCTION_VIEW: 1,
  PERMISSION_VIEW: 2,
} as const);

export function startFaceCaptcha(options: ArgsType): Promise<any> {
  let args: ArgsType = {
    appkey: options?.appkey === undefined ? '' : options?.appkey,
    ticket: options?.appkey === undefined ? '' : options?.ticket,
    environment:
      options?.environment === undefined ? '.HML' : options?.environment,
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

export function startDocumentscopy(options?: ArgsType): Promise<string> {
  const args: ArgsType = {
    appkey: options?.appkey === undefined ? '' : options?.appkey,
    ticket: options?.appkey === undefined ? '' : options?.ticket,
    environment:
      options?.environment === undefined ? '.HML' : options?.environment,
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
    custom: options?.custom === undefined ? null : options?.custom
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
                /* request(PERMISSIONS.IOS.CAMERA).then(() => {
              'The permission has enabled' + options?.appkey;
            }); */
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

export function GetIntructionViewDoc({
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
                  'This 22 feature is not available (on this device / in this context)'
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
                    startDocumentscopy(options).then(
                      (result: string) => {
                        console.log(result);
                        navigation.navigate(callBackView);
                      },
                      (error: string) => {
                        console.log(error);
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
                startDocumentscopy(options).then(
                  (result: string) => {
                    console.log(result);
                    navigation.navigate(callBackView);
                  },
                  (error: string) => {
                    console.log(error);
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
                  'This is not available (on this device / in this context)'
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
                    startDocumentscopy(options).then(
                      (result: string) => {
                        console.log(result);
                        navigation.navigate(callBackView);
                      },
                      (error: string) => {
                        console.log(error);
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
                startDocumentscopy(options).then(
                  (result: string) => {
                    console.log(result);
                    navigation.navigate(callBackView);
                  },
                  (error: string) => {
                    console.log(error);
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
          <InstructionsView onVerify={verifyPermission} onBack={onBack} />
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
}: {
  CustomInstructionView?: any | null;
  CustomPermissionView?: any | null;
  options: any;
  navigation: any;
  callbackView: string;
}) {
  return (
    <GetIntructionViewDoc
      CustomInstructionView={CustomInstructionView}
      CustomPermissionView={CustomPermissionView}
      options={options}
      navigation={navigation}
      callBackView={callbackView}
    />
  );
}
