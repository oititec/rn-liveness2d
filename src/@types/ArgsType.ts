export type ArgsType = {
  appkey: string;
  environment: '.HML' | '.PRD';
  baseUrl: string;
  apparence: ApparenceType;
};

export type ApparenceType = {
  backgroundColor: string | undefined;
  loadingColor: string | undefined;
};
