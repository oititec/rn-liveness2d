import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package '@oiti/oiti-react-native' doesn't seem to be linked. Make sure: \n\n` +
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

export function startFaceCaptcha(appKey: string): Promise<any> {
  return OitiReactNative.startfacecaptcha(appKey);
}

export function startDocumentscopy(appKey?: string): Promise<string> {
  return OitiReactNative.startdocumentoscopy(appKey);
}
