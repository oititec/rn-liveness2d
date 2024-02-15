import * as React from 'react';

import { DocumentsCopyView } from '@oiti/rn-liveness2d';
import type { onErrorType, onSuccessType } from 'src/@types/ArgsType';
import { Alert } from 'react-native';
import InstructionsView from '../InstructionsView';
import PermissionView from '../PermissionView';
//import InstructionsView from '../InstructionsView';

export default function Documentscopy({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { options } = route.params;

  const onResultSuccess = (result: string) => {
    console.log(result);
    alertBox(result, false);
  };

  const onResultError = (error: onErrorType) => {
    console.log(typeof error);
    alertBox(error.message.toString(), true);
  };

  const alertBox = (message: string, error: boolean) => {
    Alert.alert(error ? 'Erro' : 'Sucesso', `${message}`, [{ text: 'OK' }]);
  };

  return (
    <DocumentsCopyView
      options={options}
      navigation={navigation}
      callbackView="Home"
      onSuccess={onResultSuccess}
      onError={onResultError}
    />
  );
}
