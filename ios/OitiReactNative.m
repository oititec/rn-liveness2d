#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(OitiReactNative, NSObject)

RCT_EXTERN_METHOD(startdocumentscopy:(NSString)appKey
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(startfacecaptcha:(NSString)appKey
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
