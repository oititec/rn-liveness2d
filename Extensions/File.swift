//
//  File.swift
//  CocoaAsyncSocket
//
//  Created by Gabriel Catelli Goulart on 20/10/23.
//

import Foundation
import OILiveness2D

extension OitiReactNative {
    
    func presentDocumentscopyCustomization(
        completion: @escaping (DocumentscopyCustomizationBuilder?) -> Void
    ) {
        getDocumentId { [weak self] documentId in
            self?.firestore.downloadDocCoreCustomization(id: documentId) { customizationModel in
                guard let customizationModel else {
                    completion(nil)
                    return
                }
                self?.createCustomization(model: customizationModel, completion: completion)
            }
        }
    }
    
    private func createCustomization(
        model: DocumentscopyCustomizationModel,
        completion: @escaping (DocumentscopyCustomizationBuilder?) -> Void
    ) {
        var builder = DocumentscopyCustomizationBuilder.builder()
        
        builder = makeInstructionCustomization(
            with: model.instructionCustomization,
            builder: builder
        )
        
        builder = makeCaptureCustomization(
            with: model.captureCustomization,
            builder: builder
        )
        
        builder = makeLoadingCustomization(
            with: model.loadingCustomization,
            builder: builder
        )
        
        builder = makeResultCustomization(
            with: model.resultCustomization,
            builder: builder
        )
        
        builder = makeCameraPermissionCustomization(
            with: model.cameraPermissionCustomization,
            builder: builder
        )
        
        completion(builder)
    }
    
    private func makeInstructionCustomization(
        with model: DocumentscopyInstructionCustomizationModel,
        builder: DocumentscopyCustomizationBuilder
    ) -> DocumentscopyCustomizationBuilder {
        builder
            .setInstructionBackButtonColors(
                forIcon: .init(hex: model.backButtonContentColor),
                background: .init(hex: model.backButtonBackgroundColor),
                border: .init(hex: model.backButtonBorderColor)
            )
            .setInstructionBackgroundColor(.init(hex: model.backgroundColor))
            .setInstructionTitle(
                withText: model.titleText,
                color: .init(hex: model.titleColor)
            )
            .setInstructionCaption(
                withText: model.captionText,
                color: .init(hex: model.captionColor)
            )
            .setInstructionBottomSheet(
                withColor: .init(hex: model.bottomSheetColor),
                radius: CGFloat(model.bottomSheetCornerRadius)
            )
            .setInstructionRgOptionTitle(
                withText: model.rgOptionTitleText,
                color: .init(hex: model.rgOptionTitleColor)
            )
            .setInstructionRgOptionCaption(
                withText: model.rgOptionCaptionText,
                color: .init(hex: model.rgOptionCaptionColor)
            )
            .setInstructionRgOptionBackgroundColor(.init(hex: model.rgOptionBackgroundColor))
            .setInstructionRgOptionBorder(
                withColor: .init(hex: model.rgOptionBorderColor),
                width: CGFloat(model.rgOptionBorderWidth),
                radius: CGFloat(model.rgOptionCornerRadius)
            )
            .setInstructionRgOptionIcon(nil, color: .init(hex: model.rgOptionIconColor))
            .setInstructionCnhOptionTitle(
                withText: model.cnhOptionTitleText,
                color: .init(hex: model.cnhOptionTitleColor)
            )
            .setInstructionCnhOptionCaption(
                withText: model.cnhOptionCaptionText,
                color: .init(hex: model.cnhOptionCaptionColor)
            )
            .setInstructionCnhOptionBackgroundColor(.init(hex: model.cnhOptionBackgroundColor))
            .setInstructionCnhOptionBorder(
                withColor: .init(hex: model.cnhOptionBorderColor),
                width: CGFloat(model.cnhOptionBorderWidth),
                radius: CGFloat(model.cnhOptionCornerRadius)
            )
            .setInstructionCnhOptionIcon(nil, color: .init(hex: model.cnhOptionIconColor))
            .setInstructionLoadingColor(.init(hex: model.loadingColor))
        
        return builder
    }
    
    private func makeCaptureCustomization(
        with model: DocumentscopyCaptureCustomizationModel,
        builder: DocumentscopyCustomizationBuilder
    ) -> DocumentscopyCustomizationBuilder {
        builder
            .setCaptureBackButtonColors(
                forIcon: .init(hex: model.backButtonContentColor),
                background: .init(hex: model.backButtonBackgroundColor),
                border: .init(hex: model.backButtonBorderColor)
            )
            .setCaptureCloseButtonColors(
                forIcon: .init(hex: model.closeButtonContentColor),
                background: .init(hex: model.closeButtonBackgroundColor),
                border: .init(hex: model.closeButtonBorderColor)
            )
            .setCaptureFrontIndicatorText(model.frontIndicatorText)
            .setCaptureFrontIndicatorColor(.init(hex: model.frontIndicatorColor))
            .setCaptureFrontIndicatorFocusedState(
                withImage: nil,
                textColor: .init(hex: model.frontIndicatorFocusedTextColor)
            )
            .setCaptureFrontIndicatorUnfocusedState(
                withImage: nil,
                textColor: .init(hex: model.frontIndicatorUnfocusedTextColor)
            )
            .setCaptureBackIndicatorText(model.backIndicatorText)
            .setCaptureBackIndicatorColor(.init(hex: model.backIndicatorColor))
            .setCaptureBackIndicatorFocusedState(
                withImage: nil,
                textColor: .init(hex: model.backIndicatorFocusedTextColor)
            )
            .setCaptureBackIndicatorUnfocusedState(
                withImage: nil,
                textColor: .init(hex: model.backIndicatorUnfocusedTextColor)
            )
            .setCaptureInstructionGuideText(model.instructionGuideText)
            .setCaptureInstructionConfirmationText(model.instructionConfirmationText)
            .setCaptureInstructionTextColor(.init(hex: model.instructionTextColor))
            .setCapturePreviewBorderColor(
                forCaptured: .init(hex: model.previewCapturedBorderColor),
                uncapturedState: .init(hex: model.previewUncapturedBorderColor)
            )
            .setCaptureBackgroundColor(.init(hex: model.backgroundColor))
            .setCaptureCaptureButtonHighlightedStateColors(
                forIcon: .init(hex: model.captureButtonHighlightedStyleContentColor),
                background: .init(hex: model.captureButtonHighlightedStyleBackgroundColor),
                border: .init(hex: model.captureButtonHighlightedStyleBorderColor)
            )
            .setCaptureCaptureButtonNormalStateColors(
                forIcon: .init(hex: model.captureButtonNormalStyleContentColor),
                background: .init(hex: model.captureButtonNormalStyleBackgroundColor),
                border: .init(hex: model.captureButtonNormalStyleBorderColor)
            )
            .setCaptureCaptureButtonDisabledStateColors(
                forIcon: .init(hex: model.captureButtonDisabledStyleContentColor),
                background: .init(hex: model.captureButtonDisabledStyleBackgroundColor),
                border: .init(hex: model.captureButtonDisabledStyleBorderColor)
            )
            .setCaptureBottomSheetShape(
                withColor: .init(hex: model.bottomSheetColor),
                cornerRadius: CGFloat(model.bottomSheetCornerRadius)
            )
            .setCaptureConfirmationMessage(
                withText: model.confirmationMessage,
                color: .init(hex: model.confirmationMessageColor)
            )
            .setCaptureTakeNewPictureButton(withText: model.takeNewPictureButtonText)
            .setCaptureTakeNewPictureButtonHighlightedStateColors(
                forText: .init(hex: model.takeNewPictureButtonHighlightedStyleContentColor),
                background: .init(hex: model.takeNewPictureButtonHighlightedStyleBackgroundColor),
                border: .init(hex: model.takeNewPictureButtonHighlightedStyleBorderColor)
            )
            .setCaptureTakeNewPictureButtonNormalStateColors(
                forText: .init(hex: model.takeNewPictureButtonNormalStyleContentColor),
                background: .init(hex: model.takeNewPictureButtonNormalStyleBackgroundColor),
                border: .init(hex: model.takeNewPictureButtonNormalStyleBorderColor)
            )
            .setCaptureTakeNewPictureButtonDisabledStateColors(
                forText: .init(hex: model.takeNewPictureButtonDisabledStyleContentColor),
                background: .init(hex: model.takeNewPictureButtonDisabledStyleBackgroundColor),
                border: .init(hex: model.takeNewPictureButtonDisabledStyleBorderColor)
            )
            .setCaptureUsePictureButton(
                withText: model.usePictureButtonText,
                confirmationText: model.usePictureButtonConfirmationText
            )
            .setCaptureUsePictureButtonHighlightedStateColors(
                forText: .init(hex: model.usePictureButtonHighlightedStyleContentColor),
                background: .init(hex: model.usePictureButtonHighlightedStyleBackgroundColor),
                border: .init(hex: model.usePictureButtonHighlightedStyleBorderColor)
            )
            .setCaptureUsePictureButtonNormalStateColors(
                forText: .init(hex: model.usePictureButtonNormalStyleContentColor),
                background: .init(hex: model.usePictureButtonNormalStyleBackgroundColor),
                border: .init(hex: model.usePictureButtonNormalStyleBorderColor)
            )
            .setCaptureUsePictureButtonDisabledStateColors(
                forText: .init(hex: model.usePictureButtonDisabledStyleContentColor),
                background: .init(hex: model.usePictureButtonDisabledStyleBackgroundColor),
                border: .init(hex: model.usePictureButtonDisabledStyleBorderColor)
            )
        
        return builder
    }
    
    private func makeLoadingCustomization(
        with model: DocumentscopyLoadingCustomizationModel,
        builder: DocumentscopyCustomizationBuilder
    ) -> DocumentscopyCustomizationBuilder {
        builder
            .setLoadingBackgroundColor(.init(hex: model.backgroundColor))
            .setLoadingSpinner(
                withColor: .init(hex: model.backgroundColor),
                width: CGFloat(model.spinnerWidth),
                scaleFactor: model.spinnerScaleFactor
            )
        
        return builder
    }
    
    private func makeResultCustomization(
        with model: DocumentscopyResultCustomizationModel,
        builder: DocumentscopyCustomizationBuilder
    ) -> DocumentscopyCustomizationBuilder {
        builder
            .setResultBackgroundColor(.init(hex: model.successBackgrondColor), forResultType: .success)
            .setResultBackgroundColor(.init(hex: model.errorBackgrondColor), forResultType: .error)
            .setResultBackgroundColor(.init(hex: model.tryAgainBackgrondColor), forResultType: .error)
            .setResultMessage(model.successMessage, forResultType: .success)
            .setResultMessage(model.errorMessage, forResultType: .error)
            .setResultMessage(model.tryAgainMessage, forResultType: .tryAgain)
            .setResultMessageColor(.init(hex: model.successMessageColor), forResultType: .success)
            .setResultMessageColor(.init(hex: model.errorMessageColor), forResultType: .error)
            .setResultMessageColor(.init(hex: model.tryAgainMessageColor), forResultType: .tryAgain)
            .setResultTryAgainButton(withText: model.tryAgainButtonText)
            .setResultTryAgainButtonHighlightedStateColors(
                forText: .init(hex: model.tryAgainButtonHighlightedStyleContentColor),
                background: .init(hex: model.tryAgainButtonHighlightedStyleBackgroundColor),
                border: .init(hex: model.tryAgainButtonHighlightedStyleBorderColor)
            )
            .setResultTryAgainButtonNormalStateColors(
                forText: .init(hex: model.tryAgainButtonNormalStyleContentColor),
                background: .init(hex: model.tryAgainButtonNormalStyleBackgroundColor),
                border: .init(hex: model.tryAgainButtonNormalStyleBorderColor)
            )
            .setResultTryAgainButtonNormalStateColors(
                forText: .init(hex: model.tryAgainButtonDisabledStyleContentColor),
                background: .init(hex: model.tryAgainButtonDisabledStyleBackgroundColor),
                border: .init(hex: model.tryAgainButtonDisabledStyleBorderColor)
            )
        
        return builder
    }
    
    private func makeCameraPermissionCustomization(
        with model: DocumentscopyCameraPermissionCustomizationModel,
        builder: DocumentscopyCustomizationBuilder
    ) -> DocumentscopyCustomizationBuilder {
        builder
            .setCameraPermissionBackButtonColors(
                forIcon: .init(hex: model.backButtonContentColor),
                background: .init(hex: model.backButtonBackgroundColor),
                border: .init(hex: model.backButtonBorderColor)
            )
            .setCameraPermissionImage(nil, color: .init(hex: model.cameraImageColor))
            .setCameraPermissionTitle(
                withText: model.title,
                color: .init(hex: model.titleColor)
            )
            .setCameraPermissionCaption(
                withText: model.caption,
                color: .init(hex: model.captionColor)
            )
            .setCameraPermissionCheckPermissionButton(withText: model.checkPermissionButtonText)
            .setCameraPermissionCheckPermissionButtonHighlightedStateColors(
                forText: .init(hex: model.checkPermissionButtonHighlightedStyleContentColor),
                background: .init(hex: model.checkPermissionButtonHighlightedStyleBackgroundColor),
                border: .init(hex: model.checkPermissionButtonHighlightedStyleBorderColor)
            )
            .setCameraPermissionCheckPermissionButtonNormalStateColors(
                forText: .init(hex: model.checkPermissionButtonNormalStyleContentColor),
                background: .init(hex: model.checkPermissionButtonNormalStyleBackgroundColor),
                border: .init(hex: model.checkPermissionButtonNormalStyleBorderColor)
            )
            .setCameraPermissionCheckPermissionButtonDisabledStateColors(
                forText: .init(hex: model.checkPermissionButtonNormalStyleContentColor),
                background: .init(hex: model.checkPermissionButtonNormalStyleBackgroundColor),
                border: .init(hex: model.checkPermissionButtonNormalStyleBorderColor)
            )
            .setCameraPermissionBackgroundColor(.init(hex: model.backgroundColor))
            .setCameraPermissionBottomSheetShape(
                withColor: .init(hex: model.bottomSheetColor),
                cornerRadius: CGFloat(model.bottomSheetCornerRadius)
            )
            .setCameraPermissionBottomSheetTitle(
                withText: model.bottomSheetTitle,
                color: .init(hex: model.bottomSheetTitleColor)
            )
            .setCameraPermissionBottomSheetCaption(
                withText: model.bottomSheetCaption,
                color: .init(hex: model.bottomSheetCaptionColor)
            )
            .setCameraPermissionOpenSettingsButton(withText: model.openSettingsButtonText)
            .setCameraPermissionOpenSettingsButtonHighlightedStateColors(
                forText: .init(hex: model.openSettingsButtonHighlightedStyleContentColor),
                background: .init(hex: model.openSettingsButtonHighlightedStyleBackgroundColor),
                border: .init(hex: model.openSettingsButtonHighlightedStyleBorderColor)
            )
            .setCameraPermissionOpenSettingsButtonHighlightedStateColors(
                forText: .init(hex: model.openSettingsButtonNormalStyleContentColor),
                background: .init(hex: model.openSettingsButtonNormalStyleBackgroundColor),
                border: .init(hex: model.openSettingsButtonNormalStyleBorderColor)
            )
            .setCameraPermissionOpenSettingsButtonDisabledStateColors(
                forText: .init(hex: model.openSettingsButtonDisabledStyleContentColor),
                background: .init(hex: model.openSettingsButtonDisabledStyleBackgroundColor),
                border: .init(hex: model.openSettingsButtonDisabledStyleBorderColor)
            )
            .setCameraPermissionCloseButton(withText: model.closeButtonText)
            .setCameraPermissionCloseButtonHighlightedStateColors(
                forText: .init(hex: model.closeButtonHighlightedStyleContentColor),
                background: .init(hex: model.closeButtonHighlightedStyleBackgroundColor),
                border: .init(hex: model.closeButtonHighlightedStyleBorderColor)
            )
            .setCameraPermissionCloseButtonNormalStateColors(
                forText: .init(hex: model.closeButtonNormalStyleContentColor),
                background: .init(hex: model.closeButtonNormalStyleBackgroundColor),
                border: .init(hex: model.closeButtonNormalStyleBorderColor)
            )
            .setCameraPermissionCloseButtonDisabledStateColors(
                forText: .init(hex: model.closeButtonDisabledStyleContentColor),
                background: .init(hex: model.closeButtonDisabledStyleBackgroundColor),
                border: .init(hex: model.closeButtonDisabledStyleBorderColor)
            )
        
        return builder
    }
    
    private func getDocumentId(completion: @escaping (String) -> Void) {
        let alert = UIAlertController(
            title: "Customização",
            message: "Identificador de customização no Firestore",
            preferredStyle: .alert
        )
        
        alert.addTextField(configurationHandler: { [self] (textCPF) in
            nomeTextField = textCPF
            nomeTextField?.text = ""
            nomeTextField?.placeholder = "Identificador"
        })
        
        let alertAction = UIAlertAction(
            title: "Download", style: .default,
            handler: { [nomeTextField] _ in
                let fieldValue = nomeTextField?.text ?? ""
                let identifier = fieldValue.isEmpty ? "default" : fieldValue
                completion(identifier)
            }
        )
        alert.addAction(alertAction)
        
        present(alert, animated: true)
    }
}
