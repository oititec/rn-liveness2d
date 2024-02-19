import React, { useEffect, type FC } from 'react';
import { useDocCoreContext } from '../contexts/DocCoreContext';
import type { DocCoreHelperInterface } from '../interfaces/DocCoreHelper';

export const DocCoreHelper: FC<DocCoreHelperInterface> = ({
  children,
  options,
  navigation,
  callBackView,
  onError,
}) => {
  const { setNavigation, setOptions, setCallbackView } = useDocCoreContext();

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
