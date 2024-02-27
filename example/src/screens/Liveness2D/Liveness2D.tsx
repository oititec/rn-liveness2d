import * as React from 'react';

import { Liveness2dView } from '@oiti/rn-liveness2d';
import type { onErrorType } from 'src/@types/ArgsType';
import { Alert } from 'react-native';
//import InstructionsView from './CustomViews/InstructionsView';
//import PermissionView from './CustomViews/PermissionView';
// import InstructionsView from '../InstructionsView';

export default function Liveness2D({
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
    console.log(error);
    alertBox(error.message.toString(), true);
  };

  const alertBox = (message: string, error: boolean) => {
    Alert.alert(error ? 'Erro' : 'Sucesso', `${message}`, [{ text: 'OK' }]);
  };

  return (
    <Liveness2dView
      options={options}
      navigation={navigation}
      callbackView="Home"
      /* CustomInstructionView={<InstructionsView />}
      CustomPermissionView={<PermissionView />} */
      onSuccess={onResultSuccess}
      onError={onResultError}
    />
  );
}
