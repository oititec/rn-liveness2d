package com.oiti.oitireactnative.doccore

import br.com.oiti.certiface.DocCopyTheme
import com.facebook.react.bridge.ReadableMap

class DocTheme(
  private val themeBuilder: ReadableMap?,
) {
  fun getNewTheme() = DocCopyTheme.Builder()
    .instructionTitleText(themeBuilder?.getString("setInstructionTitleText") ?: "Envio de documento")
    .instructionTitleColor(themeBuilder?.getString("setInstructionTitleColor") ?: "#52575D")
    .instructionCaptionColor(themeBuilder?.getString("setInstructionCaptionColor") ?: "#666666")
    .instructionCaptionText(themeBuilder?.getString("setInstructionCaptionText") ?: "Isso garante que seu documento é oficial.")
    .instructionBottomSheetBackgroundColor(themeBuilder?.getString("setInstructionBottomSheetColor")  ?: "#FFFFFF")
    //.instructionBottomSheetRadius(themeBuilder?.getInt("setInstructionBottomSheetRadius") ?: 20)
    .setInstructionOptionDocumentBackgroundColor(themeBuilder?.getString("setInstructionDocOptionBackgroundColor")  ?: "#F5F5F5")
    .setInstructionOptionDocumentText(themeBuilder?.getString("setInstructionDocOptionTitleText")  ?: "Use RG, CNH, DNI ou CIN.")
    .setInstructionOptionDocumentTextColor(themeBuilder?.getString("setInstructionDocOptionTitleColor")  ?: "#000000")
    .setInstructionOptionDocumentTextFont(themeBuilder?.getString("setInstructionDocOptionTitleFont")  ?: "inter_bold")
    .setInstructionOptionDocumentBorderColor(themeBuilder?.getString("setInstructionDocOptionBorderColor")  ?: "#E0E0E0")
    .setInstructionOptionLightingBackgroundColor(themeBuilder?.getString("setInstructionEnvOptionBackgroundColor")  ?: "#F5F5F5")
    .setInstructionOptionLightingText(themeBuilder?.getString("setInstructionEnvOptionTitleText")  ?: "Retire o documento do plástico de proteção.")
    .setInstructionOptionLightingTextColor(themeBuilder?.getString("setInstructionEnvOptionTitleColor")  ?: "#000000")
    .setInstructionOptionLightingTextFont(themeBuilder?.getString("setInstructionEnvOptionTitleFont")  ?: "inter_bold")
    .setInstructionOptionLightingBorderColor(themeBuilder?.getString("setInstructionEnvOptionBorderColor")  ?: "#E0E0E0")
    .setInstructionContinueButtonBackgroundColor(themeBuilder?.getString("setInstructionContinueButtonBackgroundColor")  ?: "#F5F5F5")
    .setInstructionContinueButtonTextColor(themeBuilder?.getString("setInstructionContinueButtonTextColor")  ?: "#000000")
    .setInstructionContinueButtonTextFont(themeBuilder?.getString("setInstructionContinueButtonFont")  ?: "ubuntu_regular")

    .setCaptureBackgroundColor(themeBuilder?.getString("setCaptureBackgroundColor")  ?: "#1E1E1E")
    .setCaptureInstructionGuideTextFront(themeBuilder?.getString("setCaptureInstructionGuideTextFront")  ?: "Posicione a frente do seu documento dentro da marcação em uma superfície plana e fotografe.")
    .setCaptureInstructionGuideTextBack(themeBuilder?.getString("setCaptureInstructionGuideTextBack")  ?: "Posicione o verso do seu documento dentro da marcação em uma superfície plana e fotografe.")
    .setTextOk(themeBuilder?.getString("setCaptureUsePictureButtonConfirmationText")  ?: "Sim")
    .setTextRedo(themeBuilder?.getString("setCaptureTakeNewPictureButtonText")  ?: "Tentar Novamente")
    .setCaptureInstructionGuideTextColor(themeBuilder?.getString("setCaptureInstructionGuideTextColor")  ?: "#FFFFFF")
    .setTextConfirmation(themeBuilder?.getString("setTextConfirmation")  ?: "A foto do documento ficou boa?")
    .setBackgroundOkColor(themeBuilder?.getString("setCaptureUsePictureButtonHighlightedStateColorsBackground")  ?: "#05D758")
    .setCaptureInstructionGuideReviewText(themeBuilder?.getString("setCaptureInstructionGuideReviewText")  ?: "Confirme se os dados ficaram nítidos e os textos legíveis.")
    .setCapturePreviewBorderColorForCapture(themeBuilder?.getString("setCapturePreviewBorderColorForCapture")  ?: "#05D758")
    .setCaptureBottomSheetShapeColor(themeBuilder?.getString("setCaptureBottomSheetShapeColor")  ?: "#FFFFFF")
    .setCaptureBackButtonColorsIcon(themeBuilder?.getString("setCaptureBackButtonColorsIcon")  ?: "#FFFFFF")
    .setCaptureCloseButtonColorsIcon(themeBuilder?.getString("setCaptureBackButtonColorsIcon")  ?: "#FFFFFF")
    .setBackgroundDismissColor(themeBuilder?.getString("setCaptureTakeNewPictureButtonNormalStateColorsBackground")  ?: "#F5F5F5")
    .build()
}
