import { NativeModules, Platform } from 'react-native';

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

const LINKING_ERROR =
  `The package '@oiti/rn-liveness2d' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

export function verifyPermission(): Promise<boolean> {
  return Platform.OS === 'android'
    ? OitiReactNative.checkcamerapermission()
    : OitiReactNative.checkcamerapermission(true);
}

export function askPermission(): Promise<boolean> {
  return Platform.OS === 'android'
    ? OitiReactNative.askcamerapermission()
    : OitiReactNative.askcamerapermission(true);
}
