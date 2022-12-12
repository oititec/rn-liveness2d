import UIKit
//import Foundation

import FaceCaptcha

@objc(OitiReactNative)
class OitiReactNative: NSObject {

    private let baseURL = "https://comercial.certiface.com.br:8443/"

      @objc(startdocumentscopy:withResolver:withRejecter:)
      func startdocumentscopy(appKey: String, resolve:RCTPromiseResolveBlock, reject:RCTPromiseRejectBlock) -> Void {
          
          let APP_KEY = appKey
          let vc = Livene(appKey: APP_KEY, baseURL: baseURL, delegate: self)
          
          DispatchQueue.main.async {
              RCTPresentedViewController()?.present(vc, animated: true)
          }
          resolve(APP_KEY)
          
      }
    
    @objc(startfacecaptcha:withResolver:withRejecter:)
    func startfacecaptcha(appKey: String, resolve:RCTPromiseResolveBlock, reject:RCTPromiseRejectBlock) -> Void {
            
        let APP_KEY = appKey
        let vc = FaceCaptchaViewController(appKey: APP_KEY,
                                               baseURL: baseURL,
                                               delegate: self)
            
        DispatchQueue.main.async {
            RCTPresentedViewController()?.present(vc, animated: true)
        }
        resolve(APP_KEY)
            
        }
    
    
}
