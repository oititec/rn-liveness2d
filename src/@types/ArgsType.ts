export type ArgsType = {
  appkey: string;
  ticket: string;
  environment: 'HML' | 'PRD';
  nativeCustom?: boolean;
  theme?: DocCustomType | null;
};

export type DocCustomType = {
  setInstructionBackgroundColor?: string | undefined;
  setInstructionBackButtonColorsIcon?: string | undefined;
  setInstructionBackButtonColorsBackground?: string | undefined;
  setInstructionBackButtonColorsBorder?: string | undefined;
  setInstructionLoadingColor?: string | undefined;
  setInstructionBottomSheetColor?: string | undefined;
  setInstructionBottomSheetRadius?: number;
  setInstructionTitleText?: string | undefined;
  setInstructionTitleColor?: string | undefined;
  setInstructionTitleFont?: string | undefined;
  setInstructionCaptionText?: string | undefined;
  setInstructionCaptionColor?: string | undefined;
  setInstructionCaptionFont?: string | undefined;
  setInstructionDocOptionBackgroundColor?: string | undefined;
  setInstructionDocOptionTitleText?: string | undefined;
  setInstructionDocOptionTitleColor?: string | undefined;
  setInstructionDocOptionTitleFont?: string | undefined;
  setInstructionDocOptionBorderColor?: string | undefined;
  setInstructionDocOptionBorderWidth?: number;
  setInstructionDocOptionBorderRadius?: number;
  setInstructionEnvOptionBackgroundColor?: string | undefined;
  setInstructionEnvOptionTitleText?: string | undefined;
  setInstructionEnvOptionTitleColor?: string | undefined;
  setInstructionEnvOptionTitleFont?: string | undefined;
  setInstructionEnvOptionBorderColor?: string | undefined;
  setInstructionEnvOptionBorderWidth?: number;
  setInstructionEnvOptionBorderRadius?: number;
  setInstructionContinueButtonBackgroundColor?: string | undefined;
  setInstructionContinueButtonHighlightedBackgroundColor?: string | undefined;
  setInstructionContinueButtonBorderColor?: string | undefined;
  setInstructionContinueButtonHighlightedBorderColor?: string | undefined;
  setInstructionContinueButtonContentColor?: string | undefined;
  setInstructionContinueButtonHighlightedContentColor?: string | undefined;
  setInstructionContinueButtonTextColor?: string | undefined;
  setInstructionContinueButtonFont?: string | undefined;
  setLoadingBackgroundColor?: string | undefined;
  setLoadingSpinnerColor?: string | undefined;
  setLoadingSpinerWidth?: number;
  setLoadingSpinnerScale?: number;
  setCaptureBackgroundColor?: string | undefined;
  setTextFront?: string | undefined;
  setTextBack?: string | undefined;
  setCaptureInstructionGuideTextFront?: string | undefined;
  setCaptureInstructionGuideTextBack?: string | undefined;
  setTextOk?: string | undefined;
  setCaptureTakeNewPictureButtonText?: string | undefined;
  setCaptureInstructionGuideTextColor?: string | undefined;
  setTextConfirmation?: string | undefined;
  setBackgroundOkColor?: string | undefined;
  setCaptureBackButtonIcon?: string | undefined;
  setCaptureBackButtonColorsIcon?: string | undefined;
  setCaptureBackButtonColorsBackground?: string | undefined;
  setCaptureBackButtonColorsBorder?: string | undefined;
  setCaptureCloseButtonColorsIcon?: string | undefined;
  setCaptureCloseButtonColorsBackground?: string | undefined;
  setCaptureCloseButtonColorsBorder?: string | undefined;
  setCaptureFrontIndicatorColor?: string | undefined;
  setCaptureFrontIndicatorFocusedStateColor?: string | undefined;
  setCaptureFrontIndicatorUnfocusedStateColor?: string | undefined;
  setCaptureBackIndicatorColor?: string | undefined;
  setCaptureBackIndicatorFocusedStateTextColor?: string | undefined;
  setCaptureBackIndicatorUnfocusedStateTextColor?: string | undefined;
  setCaptureInstructionTextColor?: string | undefined;
  setCapturePreviewBorderColorForCapture?: string | undefined;
  setCapturePreviewBorderColorForUncapturedState?: string | undefined;
  setCaptureCaptureButtonHighlightedStateColorsIcon?: string | undefined;
  setCaptureCaptureButtonHighlightedStateColorsBackground?: string | undefined;
  setCaptureCaptureButtonHighlightedStateColorsBorder?: string | undefined;
  setCaptureCaptureButtonNormalStateColorsIcon?: string | undefined;
  setCaptureCaptureButtonNormalStateColorsBackground?: string | undefined;
  setCaptureCaptureButtonNormalStateColorsBorder?: string | undefined;
  setCaptureCaptureButtonDisabledStateColorsIcon?: string | undefined;
  setCaptureCaptureButtonDisabledStateColorsBackground?: string | undefined;
  setCaptureCaptureButtonDisabledStateColorsBorder?: string | undefined;
  setCaptureBottomSheetShapeColor?: string | undefined;
  setCaptureBottomSheetShapeCornerRadius?: number;
  setCaptureTakeNewPictureButtonHighlightedStateColorsText?: string | undefined;
  setCaptureTakeNewPictureButtonHighlightedStateColorsBackground?:
    | string
    | undefined;
  setCaptureTakeNewPictureButtonHighlightedStateColorsBorder?:
    | string
    | undefined;
  setCaptureTakeNewPictureButtonNormalStateColorsText?: string | undefined;
  setCaptureTakeNewPictureButtonNormalStateColorsBackground?:
    | string
    | undefined;
  setCaptureTakeNewPictureButtonNormalStateColorsBorder?: string | undefined;
  setCaptureTakeNewPictureButtonDisabledStateColorsText?: string | undefined;
  setCaptureTakeNewPictureButtonDisabledStateColorsBackground?:
    | string
    | undefined;
  setCaptureTakeNewPictureButtonDisabledStateColorsBorder?: string | undefined;
  setCaptureUsePictureButtonText?: string | undefined;
  setCaptureUsePictureButtonConfirmationText?: string | undefined;
  setCaptureUsePictureButtonHighlightedStateColorsText?: string | undefined;
  setCaptureUsePictureButtonHighlightedStateColorsBackground?:
    | string
    | undefined;
  setCaptureUsePictureButtonHighlightedStateColorsBorder?: string | undefined;
  setCaptureUsePictureButtonNormalStateColorsText?: string | undefined;
  setCaptureUsePictureButtonNormalStateColorsBackground?: string | undefined;
  setCaptureUsePictureButtonNormalStateColorsBorder?: string | undefined;
  setCaptureUsePictureButtonDisabledStateColorsText?: string | undefined;
  setCaptureUsePictureButtonDisabledStateColorsBackground?: string | undefined;
  setCaptureUsePictureButtonDisabledStateColorsBorder?: string | undefined;
  setResultBackgroundColorSuccess?: string | undefined;
  setResultBackgroundColorError?: string | undefined;
  setResultBackgroundColorTryAgain?: string | undefined;
  setResultMessageSuccess?: string | undefined;
  setResultMessageError?: string | undefined;
  setResultMessageTryAgain?: string | undefined;
  setResultMessageColorSuccess?: string | undefined;
  setResultMessageColorError?: string | undefined;
  setResultMessageColorTryAgain?: string | undefined;
  setResultTryAgainButtonText?: string | undefined;
  setResultTryAgainButtonHighlightedStateColorsText?: string | undefined;
  setResultTryAgainButtonHighlightedStateColorsBackground?: string | undefined;
  setResultTryAgainButtonHighlightedStateColorsBorder?: string | undefined;
  setResultTryAgainButtonNormalStateColorsText?: string | undefined;
  setResultTryAgainButtonNormalStateColorsBackground?: string | undefined;
  setResultTryAgainButtonNormalStateColorsBorder?: string | undefined;
};

export type onSuccessType = {
  valid: boolean;
  cause: string;
  codId: string;
  protocol: string;
  scanResultBlob: string;
};

export type onErrorType = {
  code: string;
  message: string;
  error?: Error;
};
