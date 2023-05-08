import UIKit
//import Foundation

import FaceCaptcha

@objc(OitiReactNative)
class OitiReactNative: NSObject, FaceCaptchaDelegate, DocumentscopyDelegate{
    
    var resolve:RCTPromiseResolveBlock!
    
    public func handleDocumentscopyCompleted() {
        resolve("handleDocumentscopyCompleted")
    }
    
    /// Callback chamada em caso de erro durante execução da Documentoscopia.
    /// - Parameters:
    ///   - error: Erro ocorrido
    public func handleDocumentscopyError(error: DocumentscopyError) {
        debugPrint("handleDocumentscopyError: \(error)")
        resolve("handleDocumentscopyError: \(error)")
    }
    
    /// Callback chamada ao clicar no botão de cancelar/fechar.
    public func handleDocumentscopyCanceled() {
        resolve("handleDocumentscopyCanceled")
    }
    
    public func handleFaceCaptchaValidation(validateModel: FCValidCaptchaModel) {
        UIApplication.shared.keyWindow?.rootViewController?.dismiss(animated: true)
        resolve("RESULT_OK")
    }
    
    /// Callback chamada em caso de erro durante execução do FaceCaptcha.
    /// - Parameters:
    /// - error: Erro ocorrido
    public func handleFaceCaptchaError(error: FaceCaptchaError) {
        UIApplication.shared.keyWindow?.rootViewController?.dismiss(animated: true)
        resolve("\(error)")
        
    }
    
    /// Callback chamada ao clicar no botão de cancelar/fechar.
    public func handleFaceCaptchaCanceled() {
        UIApplication.shared.keyWindow?.rootViewController?.dismiss(animated: true)
        resolve("RESULT_CANCELED")
        
    }
    
    private let certifaceURL = "https://comercial.certiface.com.br:8443/"
    
    @objc(startdocumentscopy:withResolver:withRejecter:)
    func startdocumentscopy(args: Dictionary<String,Any>?, resolve:@escaping RCTPromiseResolveBlock, reject:RCTPromiseRejectBlock) -> Void {
        self.resolve = resolve
        
        
        
        let appKey = args?["appkey"] as? String ?? ""
        let baseURL = args?["baseUrl"] as? String ?? certifaceURL
        let environment = args?["environment"] as? String ?? ""
        let apparence = args?["apparence"] as? Dictionary<String,Any> ?? nil
        
        
        let backgroundColor = apparence?["backgroundColor"] as? String ?? ""
        let loadingColor = apparence?["loadingColor"] as? String ?? ""
        
        DispatchQueue.main.async {
            let initTheme = HybridViewAppearance(
                backgroundColor: .init(hex: backgroundColor),
                loadingColor:.init(hex: loadingColor)
            )
            let vc = HybridDocumentscopyViewController(appKey: appKey, baseURL: baseURL, delegate: self, customAppearance: initTheme)
            vc.modalPresentationStyle = .fullScreen
            RCTPresentedViewController()?.present(vc, animated: true)
        }
        
    }
    
    @objc(startfacecaptcha:withResolver:withRejecter:)
    func startfacecaptcha(args: Dictionary<String,Any>?, resolve:@escaping RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        self.resolve = resolve
        
        let appKey = args?["appkey"] as? String ?? ""
        let baseURL = args?["baseUrl"] as? String ?? certifaceURL
        
       
        DispatchQueue.main.async {
            let vc = FaceCaptchaViewController(appKey: appKey,
                                               baseURL: baseURL,
                                               delegate: self)
            vc.modalPresentationStyle = .fullScreen
            RCTPresentedViewController()?.present(vc, animated: true)
        }
        
    }
    
}

public extension UIColor {
    
    convenience init(hex: String) {
        var cString: String = hex.trimmingCharacters(in: .whitespacesAndNewlines).uppercased()
        
        if cString.hasPrefix("#") {
            cString.remove(at: cString.startIndex)
        }
        
        if cString.count != 6 {
            self.init(red: 0.0, green: 0.0, blue: 0.0, alpha: 1.0)
        }
        
        var rgbValue: UInt64 = 0
        Scanner(string: cString).scanHexInt64(&rgbValue)
        
        self.init(
            red: CGFloat((rgbValue & 0xFF0000) >> 16) / 255.0,
            green: CGFloat((rgbValue & 0x00FF00) >> 8) / 255.0,
            blue: CGFloat(rgbValue & 0x0000FF) / 255.0,
            alpha: 1.0
        )
    }
}
