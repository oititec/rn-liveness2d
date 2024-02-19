import UIKit
//import Foundation

import OILiveness2D
import OICommons
import OIComponents
import AVFoundation

@objc(OitiReactNative)
class OitiReactNative: NSObject, FaceCaptchaDelegate, DocumentscopyDelegate{
    
    var resolve:RCTPromiseResolveBlock!
    var reject:RCTPromiseRejectBlock!
    
    public func handleSuccess(model: FaceCaptchaSuccessModel){
        debugPrint("handleSuccess: \(model)")
        UIApplication.shared.keyWindow?.rootViewController?.dismiss(animated: true)
        resolve("RESULT_OK")
    }
    
    public func handleError(error: FaceCaptchaError){
        UIApplication.shared.keyWindow?.rootViewController?.dismiss(animated: true)
        reject("0", "\(error)", error)
    }
    
    public func handleCanceled() {
        UIApplication.shared.keyWindow?.rootViewController?.dismiss(animated: true)
        reject("0", "RESULT_CANCELED", "result" as? Error)
    }
    
    func handleDocumentscopyCompleted(){
        UIApplication.shared.keyWindow?.rootViewController?.dismiss(animated: true)
        resolve("RESULT_OK")
    }
    
    func handleDocumentscopyError(error: DocumentscopyError){
        UIApplication.shared.keyWindow?.rootViewController?.dismiss(animated: true)
        reject("0", "\(error)", error)
    }
    
    func handleDocumentscopyCanceled(){
        UIApplication.shared.keyWindow?.rootViewController?.dismiss(animated: true)
        reject("0", "RESULT_CANCELED", "result" as? Error)
    }
    
    @objc(startdocumentscopy:withResolver:withRejecter:)
    func startdocumentscopy(
        args: Dictionary<String,Any>?,
        resolve:@escaping RCTPromiseResolveBlock,
        reject:@escaping RCTPromiseRejectBlock
    ) -> Void {
        self.resolve = resolve
        self.reject = reject
        
        let ticket = args?["ticket"] as? String ?? nil
        let appKey = args?["appkey"] as? String ?? ""
        let environment = args?["environment"] as? String ?? "HML"
        let nativeCustom = args?["nativeCustom"] as? Bool ?? false
        let custom = args?["theme"] as? Dictionary<String,Any> ?? nil
        let builder = DocumentscopyCustomizationBuilder.builder()
        
        DispatchQueue.main.async {
            let vc = nativeCustom == false ? HybridDocumentscopyViewController(
                ticket: ticket == "" ? nil : ticket,
                appKey: appKey,
                environment: environment == "PRD" ? Environment.PRD : Environment.HML,
                delegate: self,
                customizationTheme: (custom != nil) ? self.createCustomization(builder: builder, custom: custom).build() : nil
            ) : DocumentscopyViewController(
                ticket: ticket == "" ? nil : ticket,
                appKey: appKey,
                environment: environment == "PRD" ? Environment.PRD : Environment.HML,
                delegate: self,
                customizationTheme: (custom != nil) ? self.createCustomization(builder: builder, custom: custom).build() : nil
            )
            
            vc.modalPresentationStyle = .fullScreen
            RCTPresentedViewController()?.present(vc, animated: true)
        }
    }
    
    @objc(startfacecaptcha:withResolver:withRejecter:)
    func startfacecaptcha(
        args: Dictionary<String,Any>?,
        resolve:@escaping RCTPromiseResolveBlock,
        reject:@escaping RCTPromiseRejectBlock
    ) -> Void {
        self.resolve = resolve
        self.reject = reject
        
        let appKey = args?["appkey"] as? String ?? ""
        let environment = args?["environment"] as? String ?? "HML"
        
        DispatchQueue.main.async {
            let vc = HybridFaceCaptchaViewController(
                appKey: appKey,
                environment: environment == "PRD" ? Environment.PRD : Environment.HML,
                delegate: self
            )
            vc.modalPresentationStyle = .fullScreen
            RCTPresentedViewController()?.present(vc, animated: true)
        }
    }
    
    @objc(askcamerapermission:withResolver:withRejecter:)
    func askCameraPermission(args: ObjCBool, resolve: @escaping RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        AVCaptureDevice.requestAccess(for: .video) { granted in
            DispatchQueue.main.async {
                if granted {
                    resolve(true)
                } else {
                    if let settingsURL = URL(string: UIApplication.openSettingsURLString) {
                        UIApplication.shared.open(settingsURL, options: [:]) { _ in }
                    }
                    resolve(false)
                }
            }
        }
    }
    
    @objc(checkcamerapermission:withResolver:withRejecter:)
    func checkcamerapermission(args: ObjCBool, resolve:@escaping RCTPromiseResolveBlock, reject:RCTPromiseRejectBlock) -> Void {
        if AVCaptureDevice.authorizationStatus(for: AVMediaType.video) ==  AVAuthorizationStatus.authorized {
            resolve(true)
        } else {
            resolve(false)
        }
    }
    
    func createCustomization(
        builder: DocumentscopyCustomizationBuilder,
        custom: Dictionary<String,Any>?
    ) -> DocumentscopyCustomizationBuilder {
        builder
            .setInstructionBackgroundColor(.init(hex: custom?["setInstructionBackgroundColor"] as? String ?? ""))
            .setInstructionBackButtonColors(
                forIcon: .init(hex: custom?["setInstructionBackButtonColorsIcon"] as? String ?? ""),
                background: .init(hex: custom?["setInstructionBackButtonColorsBackground"] as? String ?? ""),
                border: .init(hex: custom?["setInstructionBackButtonColorsBorder"] as? String ?? "")
            )
            .setInstructionLoadingColor(.init(hex: custom?["setInstructionLoadingColor"] as? String ?? ""))
            .setInstructionBottomSheet(
                withColor: .init(hex: custom?["setInstructionBottomSheetColor"] as? String ?? ""),
                radius: custom?["setInstructionBottomSheetRadius"] as? CGFloat ?? nil
            )
            .setInstructionTitle(
                withText: custom?["setInstructionTitleText"] as? String ?? nil,
                color: .init(hex: custom?["setInstructionTitleColor"] as? String ?? ""),
                font: UIFont(name: custom?["setInstructionTitleFont"] as? String ?? "", size: 14)
            )
            .setInstructionCaption(
                withText: custom?["setInstructionCaptionText"] as? String ?? nil,
                color: .init(hex: custom?["setInstructionCaptionColor"] as? String ?? ""),
                font: UIFont(name: custom?["setInstructionCaptionFont"] as? String ?? "", size: 14)
            )
            .setInstructionDocOptionBackgroundColor(.init(hex: custom?["setInstructionBottomSheetColor"] as? String ?? ""))
            .setInstructionDocOptionTitle(
                withText: custom?["setInstructionDocOptionTitleText"] as? String ?? nil,
                color: .init(hex: custom?["setInstructionDocOptionTitleColor"] as? String ?? ""),
                font: UIFont(name: custom?["setInstructionDocOptionTitleFont"] as? String ?? "", size: 14)
            )
            .setInstructionDocOptionBorder(
                withColor: .init(hex: custom?["setInstructionDocOptionBorderColor"] as? String ?? ""),
                width: custom?["setInstructionDocOptionBorderWidth"] as? CGFloat ?? 4,
                radius: custom?["setInstructionDocOptionBorderRadius"] as? CGFloat ?? 4
            )
            .setInstructionEnvOptionBackgroundColor(.init(hex: custom?["setInstructionBottomSheetColor"] as? String ?? ""))
            .setInstructionEnvOptionTitle(
                withText: custom?["setInstructionEnvOptionTitleText"] as? String ?? nil,
                color: .init(hex: custom?["setInstructionEnvOptionTitleColor"] as? String ?? ""),
                font: UIFont(name: custom?["setInstructionEnvOptionTitleFont"] as? String ?? "", size: 14)
            )
            .setInstructionEnvOptionBorder(
                withColor: .init(hex: custom?["setInstructionEnvOptionBorderColor"] as? String ?? ""),
                width: custom?["setInstructionEnvOptionBorderWidth"] as? CGFloat ?? 4,
                radius: custom?["setInstructionEnvOptionBorderRadius"] as? CGFloat ?? 4
            )
            .setInstructionContinueButton(
                backgroundColor:.init(hex: custom?["setInstructionContinueButtonBackgroundColor"] as? String ?? ""),
                highlightedBackgroundColor:.init(hex: custom?["setInstructionContinueButtonHighlightedBackgroundColor"] as? String ?? ""),
                borderColor:.init(hex: custom?["setInstructionContinueButtonBorderColor"] as? String ?? ""),
                highlightedBorderColor:.init(hex: custom?["setInstructionContinueButtonHighlightedBorderColor"] as? String ?? ""),
                contentColor:.init(hex: custom?["setInstructionContinueButtonContentColor"] as? String ?? ""),
                highlightedContentColor:.init(hex: custom?["setInstructionContinueButtonHighlightedContentColor"] as? String ?? ""),
                textColor:.init(hex: custom?["setInstructionContinueButtonTextColor"] as? String ?? ""),
                font: UIFont(name: custom?["setInstructionContinueButtonFont"] as? String ?? "", size: 14)
                
            )
        
            .setLoadingBackgroundColor(.init(hex: custom?["setLoadingBackgroundColor"] as? String ?? "#000000"))
            .setLoadingSpinner(
                withColor: .init(hex: custom?["setLoadingSpinnerColor"] as? String ?? "#FFFFFF"),
                width: custom?["setLoadingSpinerWidth"] as? CGFloat ?? 1,
                scaleFactor: custom?["setLoadingSpinnerScale"] as? Int ?? 1
            )
        
            .setCaptureBackButtonIcon(OitiReactNative.downloadImage(from: custom?["setCaptureBackButtonIcon"] as? String ?? ""))
        
            .setCaptureBackgroundColor(.init(hex: custom?["setCaptureBackgroundColor"] as! String))
            .setCaptureFrontIndicatorText(custom?["setTextFront"] as! String)
            .setCaptureBackIndicatorText(custom?["setTextBack"] as! String)
            .setCaptureInstructionGuideText(forFront: custom?["setCaptureInstructionGuideTextFront"] as? String, back: custom?["setCaptureInstructionGuideTextBack"] as? String)
            .setCaptureInstructionConfirmationText(custom?["setCaptureInstructionGuideReviewText"] as! String)
            .setCaptureTakeNewPictureButton(withText: custom?["setCaptureTakeNewPictureButtonText"] as? String)
            .setCaptureInstructionTextColor(.init(hex: custom?["setCaptureInstructionGuideTextColor"] as! String))
            .setCaptureConfirmationMessage(
                withText: custom?["setTextConfirmation"] as? String,
                color: .init(hex:  custom?["setBackgroundOkColor"] as! String)
            )
            .setCaptureBackButtonColors(
                forIcon: .init(hex: custom?["setCaptureBackButtonColorsIcon"] as! String),
                background: .init(hex: custom?["setCaptureBackgroundColor"] as! String),
                border: .init(hex: custom?["setCaptureBackgroundColor"] as! String)
            )
            .setCaptureCloseButtonColors(
                forIcon: .init(hex: custom?["setCaptureCloseButtonColorsIcon"] as! String),
                background: .init(hex: custom?["setCaptureBackgroundColor"] as! String),
                border: .init(hex: custom?["setCaptureBackgroundColor"] as! String)
            )
            .setCaptureFrontIndicatorColor(.init(hex: custom?["setCaptureFrontIndicatorColor"] as! String))
        
            .setCaptureFrontIndicatorFocusedState(
                withImage: nil,
                textColor: .init(hex: custom?["setCaptureFrontIndicatorColor"] as! String)
            )
            .setCaptureFrontIndicatorUnfocusedState(
                withImage: nil,
                textColor: .init(hex: custom?["setCaptureFrontIndicatorUnfocusedStateColor"] as! String)
            )
            .setCaptureBackIndicatorColor(.init(hex: custom?["setCaptureBackIndicatorColor"] as! String))
            .setCaptureBackIndicatorFocusedState(
                withImage: nil,
                textColor: .init(hex: custom?["setCaptureBackIndicatorFocusedStateTextColor"] as! String)
            )
            .setCaptureBackIndicatorUnfocusedState(
                withImage: nil,
                textColor: .init(hex: custom?["setCaptureBackIndicatorUnfocusedStateTextColor"] as! String)
            )
            .setCaptureInstructionTextColor(.init(hex: custom?["setCaptureInstructionTextColor"] as! String))
            .setCapturePreviewBorderColor(
                forCaptured: .init(hex: custom?["setCapturePreviewBorderColorForCapture"] as! String),
                uncapturedState: .init(hex: custom?["setCapturePreviewBorderColorForCapture"] as! String)
            )
            .setCaptureCaptureButtonHighlightedStateColors(
                forIcon: .init(hex: custom?["setCaptureCaptureButtonHighlightedStateColorsIcon"] as! String),
                background: .init(hex: custom?["setCaptureCaptureButtonHighlightedStateColorsBackground"] as! String),
                border: .init(hex: custom?["setCaptureCaptureButtonHighlightedStateColorsBorder"] as! String)
            )
            .setCaptureCaptureButtonNormalStateColors(
                forIcon: .init(hex: custom?["setCaptureCaptureButtonNormalStateColorsIcon"] as! String),
                background: .init(hex: custom?["setCaptureCaptureButtonNormalStateColorsBackground"] as! String),
                border: .init(hex: custom?["setCaptureCaptureButtonNormalStateColorsBorder"] as! String)
            )
            .setCaptureCaptureButtonDisabledStateColors(
                forIcon: .init(hex: custom?["setCaptureCaptureButtonDisabledStateColorsIcon"] as! String),
                background: .init(hex: custom?["setCaptureCaptureButtonDisabledStateColorsBackground"] as! String),
                border: .init(hex: custom?["setCaptureCaptureButtonDisabledStateColorsBorder"] as! String)
            )
            .setCaptureBottomSheetShape(
                withColor: .init(hex: custom?["setCaptureBottomSheetShapeColor"] as! String),
                cornerRadius: CGFloat(custom?["setCaptureBottomSheetShapeCornerRadius"] as? CGFloat ?? 6)
            )
            .setCaptureTakeNewPictureButtonHighlightedStateColors(
                forText: .init(hex: custom?["setCaptureTakeNewPictureButtonHighlightedStateColorsText"] as! String),
                background: .init(hex: custom?["setCaptureTakeNewPictureButtonHighlightedStateColorsBackground"] as! String),
                border: .init(hex: custom?["setCaptureTakeNewPictureButtonHighlightedStateColorsBorder"] as! String)
            )
            .setCaptureTakeNewPictureButtonNormalStateColors(
                forText: .init(hex: custom?["setCaptureTakeNewPictureButtonNormalStateColorsText"] as! String),
                background: .init(hex: custom?["setCaptureTakeNewPictureButtonNormalStateColorsBackground"] as! String),
                border: .init(hex: custom?["setCaptureTakeNewPictureButtonNormalStateColorsBorder"] as! String)
            )
            .setCaptureTakeNewPictureButtonDisabledStateColors(
                forText: .init(hex: custom?["setCaptureTakeNewPictureButtonDisabledStateColorsText"] as! String),
                background: .init(hex: custom?["setCaptureTakeNewPictureButtonDisabledStateColorsBackground"] as! String),
                border: .init(hex: custom?["setCaptureTakeNewPictureButtonDisabledStateColorsBorder"] as! String)
            )
            .setCaptureUsePictureButton(
                withText: custom?["setCaptureUsePictureButtonConfirmationText"] as? String,
                confirmationText: custom?["setCaptureInstructionGuideReviewText"] as? String
            )
            .setCaptureUsePictureButtonHighlightedStateColors(
                forText: .init(hex: custom?["setCaptureUsePictureButtonHighlightedStateColorsText"] as! String),
                background: .init(hex: custom?["setCaptureUsePictureButtonHighlightedStateColorsBackground"] as! String),
                border: .init(hex: custom?["setCaptureUsePictureButtonHighlightedStateColorsBorder"] as! String)
            )
            .setCaptureUsePictureButtonNormalStateColors(
                forText: .init(hex: custom?["setCaptureUsePictureButtonHighlightedStateColorsText"] as! String),
                background: .init(hex: custom?["setCaptureUsePictureButtonNormalStateColorsBackground"] as! String),
                border: .init(hex: custom?["setCaptureUsePictureButtonHighlightedStateColorsBorder"] as! String)
            )
            .setCaptureUsePictureButtonDisabledStateColors(
                forText: .init(hex: custom?["setCaptureUsePictureButtonHighlightedStateColorsText"] as! String),
                background: .init(hex: custom?["setCaptureUsePictureButtonHighlightedStateColorsBackground"] as! String),
                border: .init(hex: custom?["setCaptureUsePictureButtonHighlightedStateColorsBorder"] as! String)
            )
            .setResultBackgroundColor(.init(hex: custom?["setResultBackgroundColorSuccess"] as! String), forResultType: .success)
            .setResultBackgroundColor(.init(hex: custom?["setResultBackgroundColorError"] as! String), forResultType: .error)
            .setResultBackgroundColor(.init(hex: custom?["setResultBackgroundColorTryAgain"] as! String), forResultType: .error)
        
            .setResultMessage(custom?["setResultMessageSuccess"] as! String, forResultType: .success)
            .setResultMessage(custom?["setResultMessageError"] as! String, forResultType: .error)
            .setResultMessage(custom?["setResultMessageTryAgain"] as! String, forResultType: .tryAgain)
        
            .setResultMessageColor(.init(hex: custom?["setResultMessageColorSuccess"] as! String), forResultType: .success)
            .setResultMessageColor(.init(hex: custom?["setResultMessageColorError"] as! String), forResultType: .error)
            .setResultMessageColor(.init(hex: custom?["setResultMessageColorTryAgain"] as! String), forResultType: .tryAgain)
        
            .setResultTryAgainButton(withText: custom?["setResultTryAgainButtonText"] as? String)
        
            .setResultTryAgainButtonHighlightedStateColors(
                forText: .init(hex: custom?["setResultMessageColorTryAgain"] as! String),
                background: .init(hex: custom?["setResultMessageColorTryAgain"] as! String),
                border: .init(hex: custom?["setResultMessageColorTryAgain"] as! String)
            )
            .setResultTryAgainButtonNormalStateColors(
                forText: .init(hex: custom?["setResultTryAgainButtonNormalStateColorsText"] as! String),
                background: .init(hex: custom?["setResultTryAgainButtonNormalStateColorsBackground"] as! String),
                border: .init(hex: custom?["setResultTryAgainButtonNormalStateColorsBorder"] as! String)
            )
        
        return builder
    }
    
    static func downloadImage(from url: String) -> UIImage? {
        guard let imageURL = URL(string: url),
              let data = try? Data(contentsOf: imageURL),
              let image = UIImage(data: data) else {
            return nil
        }
        let imageName = "downloadedImage"
        
        if let path = saveImageToAssets(image, withName: imageName) {
            return UIImage(named: path)
        }
        
        return nil
    }
    
    static func saveImageToAssets(_ image: UIImage, withName name: String) -> String? {
        guard let data = image.pngData(),
              let documentsDirectory = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask).first else {
            return nil
        }
        
        let fileURL = documentsDirectory.appendingPathComponent("\(name).png")
        
        do {
            try data.write(to: fileURL)
            return fileURL.lastPathComponent
        } catch {
            return nil
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
