export type ArgsType = {
  appkey: string;
  ticket: string;
  environment: '.HML' | '.PRD';
  apparence: ApparenceType;
  custom?: DocCustomType | null;
};

export type ApparenceType = {
  backgroundColor: string | undefined;
  loadingColor: string | undefined;
};

export type DocCustomType = {
  instructionBackButtonIcon?: string | undefined;
  instructionTitleText?: string | undefined;
  instructionTitleColor?: string | undefined;
  instructionBackgroundColor?: string | undefined;
  instructionCaptionText?: string | undefined;
  instructionBottomSheetBackgroundColor?: string | undefined;
  setCaptureBottomSheetBackground?: string | undefined;
  rgTitleText?: string | undefined;
  rgTitleColor?: string | undefined;
  rgCaptionText?: string | undefined;
  rgCaptionColor?: string | undefined;
  cnhTitleText?: string | undefined;
  cnhTitleColor?: string | undefined;
  cnhCaptionText?: string | undefined;
  setCaptureBackgroundColor?: string | undefined;
  textOkColor?: string | undefined;
  setBackgroundDismissColor?: string | undefined;
  setTryAgainColor?: string | undefined;
  setBackgroundOkColor?: string | undefined;
  setTextFront?: string | undefined;
  setTextBack?: string | undefined;
  setCaptureInstructionGuideText?: string | undefined;
  setCaptureInstructionGuideBackgroundColor?: string | undefined;
  setCaptureInstructionGuideTextColor?: string | undefined;
  setTextOk?: string | undefined;
  setTextConfirmation?: string | undefined;
  setTextRedo?: string | undefined;
};
