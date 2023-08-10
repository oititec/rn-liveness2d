import * as React from 'react';

import { Liveness2dView } from '@oiti/rn-liveness2d';
// import InstructionsView from '../InstructionsView';

export default function Liveness2D({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { options } = route.params;
  return (
    <Liveness2dView
      options={options}
      navigation={navigation}
      callbackView="Home"
      /* CustomInstructionView={<InstructionsView navigation={navigation} />} */
      /* CustomPermissionView={<PermissionView navigation={navigation} />} */
    />
  );
}
