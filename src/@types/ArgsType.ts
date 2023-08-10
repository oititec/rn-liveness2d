export type ArgsType = {
  appkey: string;
  ticket: string;
  environment: '.HML' | '.PRD';
  apparence: ApparenceType;
};

export type ApparenceType = {
  backgroundColor: string | undefined;
  loadingColor: string | undefined;
};
