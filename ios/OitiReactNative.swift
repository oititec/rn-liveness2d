import UIKit
//import Foundation

import OILiveness2D
import OICommons
import OIComponents

@objc(OitiReactNative)
class OitiReactNative: NSObject, FaceCaptchaDelegate, DocumentscopyDelegate{
    
    var resolve:RCTPromiseResolveBlock!
    
    public func handleSuccess(model: FaceCaptchaSuccessModel){
        debugPrint("handleSuccess: \(model)")
        UIApplication.shared.keyWindow?.rootViewController?.dismiss(animated: true)
        resolve("RESULT_OK")
    }

    public func handleError(error: FaceCaptchaError){
        debugPrint("handleError: \(error)")
        UIApplication.shared.keyWindow?.rootViewController?.dismiss(animated: true)
        resolve("\(error)")
    }

    /// Método que lida com o cancelamento do fluxo de reconhecimento facial por parte do usuário.
    public func handleCanceled() {
        debugPrint("handleCaptureCanceled")
        UIApplication.shared.keyWindow?.rootViewController?.dismiss(animated: true)
        resolve("RESUL_CANCELED")
    }
    
    func handleDocumentscopyCompleted(){
        UIApplication.shared.keyWindow?.rootViewController?.dismiss(animated: true)
        resolve("RESULT_OK")
    }

    /// Lidar com o erro que ocorreu durante o processo de Documentoscopia.
    /// - Parameter error: Erro capturado no processo.
    func handleDocumentscopyError(error: DocumentscopyError){
        UIApplication.shared.keyWindow?.rootViewController?.dismiss(animated: true)
        resolve("\(error)")
    }

    /// Lidar com o processo de Documentoscopia que foi cancelado.
    func handleDocumentscopyCanceled(){
        UIApplication.shared.keyWindow?.rootViewController?.dismiss(animated: true)
        resolve("RESUL_CANCELED")
    }
   
    private let certifaceURL = "https://comercial.certiface.com.br:8443/"
    
    @objc(startdocumentscopy:withResolver:withRejecter:)
    func startdocumentscopy(args: Dictionary<String,Any>?, resolve:@escaping RCTPromiseResolveBlock, reject:RCTPromiseRejectBlock) -> Void {
        self.resolve = resolve
        
        
        let ticket = args?["ticket"] as? String ?? ""
        let appKey = args?["appkey"] as? String ?? ""
        let baseURL = args?["baseUrl"] as? String ?? certifaceURL
        let environment = args?["environment"] as? String ?? ""
        let apparence = args?["apparence"] as? Dictionary<String,Any> ?? nil
        
        
        let backgroundColor = apparence?["backgroundColor"] as? String ?? ""
        let loadingColor = apparence?["loadingColor"] as? String ?? ""
        
        let custom = args?["custom"] as? Dictionary<String,Any> ?? nil
        print("CUSTOM ->")
        print(custom)
        var builder = DocumentscopyCustomizationBuilder.builder()
        DispatchQueue.main.async { [self] in
            
                let vc = HybridDocumentscopyViewController(
                    ticket: ticket,
                    appKey: appKey,
                    environment: Environment.HML,
                    delegate: self,
                    customizationTheme: createCustomization(builder: builder, custom: custom).build()
                )
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
            let vc = HybridFaceCaptchaViewController(
                appKey: appKey,
                environment: Environment.HML,
                delegate: self
            )
            vc.modalPresentationStyle = .fullScreen
            RCTPresentedViewController()?.present(vc, animated: true)
        }
        
    }
    
    private func createCustomization(
        builder: DocumentscopyCustomizationBuilder,
        custom: Dictionary<String,Any>?
    ) -> DocumentscopyCustomizationBuilder {
        builder
            .setLoadingBackgroundColor(.init(hex: custom?["setLoadingBackgroundColor"] as? String ?? ""))
            .setCaptureBackgroundColor(.init(hex: custom?["setCaptureBackgroundColor"] as? String ?? ""))
            .setCaptureFrontIndicatorText(custom?["setTextFront"] as? String ?? "")
            .setCaptureBackIndicatorText(custom?["setTextBack"] as? String ?? "")
            .setCaptureInstructionGuideText(custom?["setCaptureInstructionGuideText"] as? String ?? "")
            .setCaptureInstructionConfirmationText(custom?["setTextOk"] as? String ?? "")
            .setCaptureTakeNewPictureButton(withText: custom?["setTextRedo"] as? String ?? "")
            .setCaptureInstructionTextColor(.init(hex: custom?["setCaptureInstructionGuideTextColor"] as? String ?? ""))
            .setCaptureConfirmationMessage(
                withText: custom?["setTextConfirmation"] as? String ?? "",
                color: .init(hex:  custom?["setBackgroundOkColor"] as? String ?? "")
            )
        
        return builder
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
