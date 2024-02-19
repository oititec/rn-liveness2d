import React, { useEffect, type FC } from 'react';
import type { FaceCaptchaHelperInterface } from '../interfaces/FaceCaptchaHelper';
import { useFaceCaptchaContext } from '../contexts/FaceCaptchaContext';

export const FaceCaptchaHelper: FC<FaceCaptchaHelperInterface> = ({
  children,
  options,
  navigation,
  callBackView,
  onError,
}) => {
  const { setNavigation, setOptions, setCallbackView } =
    useFaceCaptchaContext();

  useEffect(() => {
    if (
      options.appkey === null ||
      options.appkey === undefined ||
      options.appkey === ''
    ) {
      navigation.navigate(callBackView);
      onError({ code: '0', message: 'invalidAppKey' });
    }

    setNavigation(navigation);
    setCallbackView(callBackView);
    setOptions(options);
  }, [
    options,
    navigation,
    callBackView,
    onError,
    setNavigation,
    setOptions,
    setCallbackView,
  ]);

  return <>{children}</>;
};
