#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(OitiReactNative, NSObject)

RCT_EXTERN_METHOD(startdocumentscopy:(NSDictionary)args
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(startfacecaptcha:(NSDictionary)args
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
