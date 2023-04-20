import * as React from 'react';

import { Liveness2dView } from '@oiti/rn-liveness2d';
import InstructionsView from '../InstructionsView';
import PermissionView from '../PermissionView';

export default function Liveness2D({ navigation }: { navigation: any }) {
  const appKey =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZXJ0aWZhY2UiLCJ1c2VyIjoiNzg3MzdCRjY1N0NEOTMwOEQyNzlBODIxRUM4MDEzQjU3fG9pdGkuZmFjZXRlYy5obWwiLCJlbXBDb2QiOiIwMDAwMDAwMDAxIiwiZmlsQ29kIjoiMDAwMDAwMjc2OSIsImNwZiI6IjU0MjczOTY2MDg1Iiwibm9tZSI6IkYxQTJFNDE5OTY0QkJEQ0RGMzU1MDBCNDY3QzhCMUUwNkU5MTIwMTA0NDZGMDYwNkI5QUFGODU5ODI1MTREMTAwQjU0MTZFNUJGM0U4Rjg1OEVGNUNGQkRERTQ0MkYzQjhEOUIyREY3MTU4RDdENTg1RDNDN0YzRDk3ODlDRkEwfEFTSEFVQVMgQVNVSEFTSFUgQVNVSCIsIm5hc2NpbWVudG8iOiIwOC8xMC8xOTkxIiwiZWFzeS1pbmRleCI6IkFBQUFFc1RVL1hNSjNuQWN3UVJWeWl3Nmo1Zi9uVzdGYVUvdEdrbFErUTI4dklRWUN1VkNONnA5aFIwNXVBPT0iLCJrZXkiOiJRV0pzWlNCaGJpQm9iM0JsSUc5bUlHSnZaSGt1SUVGdWVTQnVZWGtnYzJoNWJtVT0iLCJleHAiOjE2NzkwNjIwOTAsImlhdCI6MTY3OTA2MTc5MH0.ll6M-OK5Y5WchhCebGCnB4Mye6GuKwqH6zmhjyxZP8I';

  const options = {
    appkey: appKey,
    environment: '.HML',
    baseUrl: '',
  };
  return (
    <Liveness2dView
      options={options}
      navigation={navigation}
      callbackView="Home"
      CustomInstructionView={<InstructionsView navigation={navigation} />}
      /* CustomPermissionView={<PermissionView navigation={navigation} />} */
    />
  );
}
