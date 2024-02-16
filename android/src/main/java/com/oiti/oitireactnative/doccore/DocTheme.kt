package com.oiti.oitireactnative.doccore

import br.com.oiti.certiface.DocCopyTheme
import com.facebook.react.bridge.ReadableMap

class DocTheme(
  private val themeBuilder: ReadableMap?,
) {
  fun getNewTheme() = DocCopyTheme.Builder()
    .instructionTitleText(themeBuilder?.getString("setInstructionTitleText") ?: "Envio de documento")
    .instructionTitleColor(themeBuilder?.getString("setInstructionTitleColor") ?: "#000000")
    .instructionCaptionColor(themeBuilder?.getString("setInstructionCaptionColor") ?: "#000000")
    .instructionCaptionText(themeBuilder?.getString("setInstructionCaptionText") ?: "Isso garante que seu documento é oficial.")
    .instructionBottomSheetBackgroundColor(themeBuilder?.getString("setInstructionBottomSheetColor") as? String ?: "")
    .instructionBottomSheetRadius(themeBuilder?.getInt("setInstructionBottomSheetRadius") as? Int ?: 20)
    .setInstructionOptionDocumentBackgroundColor(themeBuilder?.getString("setInstructionDocOptionBackgroundColor") as? String ?: "")
    .setInstructionOptionDocumentText(themeBuilder?.getString("setInstructionDocOptionTitleText") as? String ?: "")
    .setInstructionOptionDocumentTextColor(themeBuilder?.getString("setInstructionDocOptionTitleColor") as? String ?: "")
    .setInstructionOptionDocumentTextFont(themeBuilder?.getString("setInstructionDocOptionTitleFont") as? String ?: "ubuntu_regular")
    .setInstructionOptionDocumentBorderColor(themeBuilder?.getString("setInstructionDocOptionBorderColor") as? String ?: "")
    .setInstructionOptionLightingBackgroundColor(themeBuilder?.getString("setInstructionEnvOptionBackgroundColor") as? String ?: "")
    .setInstructionOptionLightingText(themeBuilder?.getString("setInstructionEnvOptionTitleText") as? String ?: "")
    .setInstructionOptionLightingTextColor(themeBuilder?.getString("setInstructionEnvOptionTitleColor") as? String ?: "")
    .setInstructionOptionLightingTextFont(themeBuilder?.getString("setInstructionEnvOptionTitleFont") as? String ?: "ubuntu_regular")
    .setInstructionOptionLightingBorderColor(themeBuilder?.getString("setInstructionEnvOptionBorderColor") as? String ?: "")
    .setInstructionContinueButtonBackgroundColor(themeBuilder?.getString("setInstructionContinueButtonBackgroundColor") as? String ?: "")
    .setInstructionContinueButtonTextColor(themeBuilder?.getString("setInstructionContinueButtonTextColor") as? String ?: "#000000")
    .setInstructionContinueButtonTextFont(themeBuilder?.getString("setInstructionContinueButtonFont") as? String ?: "ubuntu_regular")

    .setCaptureBackgroundColor(themeBuilder?.getString("setCaptureBackgroundColor") as? String ?: "")
    .setTextFront(themeBuilder?.getString("setTextFront") as? String ?: "Frente")
    .setTextBack(themeBuilder?.getString("setCaptureInstructionGuideTextBack") as? String ?: "Verso")
    .setCaptureInstructionGuideText(themeBuilder?.getString("setCaptureInstructionGuideTextFront") as? String ?: "")
    .setTextOk(themeBuilder?.getString("setTextOk") as? String ?: "")
    .setCaptureInstructionGuideTextColor(themeBuilder?.getString("setCaptureInstructionGuideTextColor") as? String ?: "")
    .setTextConfirmation(themeBuilder?.getString("setTextConfirmation") as? String ?: "")
    .setBackgroundOkColor(themeBuilder?.getString("setBackgroundOkColor") as? String ?: "")
    .build()
}
