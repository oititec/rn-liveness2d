import * as React from 'react';

import { DocumentsCopyView } from '@oiti/rn-liveness2d';
//import InstructionsView from '../InstructionsView';

export default function Documentscopy({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { options } = route.params;
  /*  const appKey =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZXJ0aWZhY2UiLCJ1c2VyIjoiRjc2MkRDRjc2MDM1QUQ3NkRFMzE0RDdFRjExNDI0RkQyfG9pdGkuZmFjZXRlYy5obWwiLCJlbXBDb2QiOiIwMDAwMDAwMDAxIiwiZmlsQ29kIjoiMDAwMDAwMjc2OSIsImNwZiI6IjU0MjczOTY2MDg1Iiwibm9tZSI6IjEzOUFBNUQ0QkY2QzlCMkIwMUI2OTFCMDExMjkxMTg4RUUwMjA3NENBMDBFRTI1MzY1QzczN0Y0NkFGNEU4NUU4RjFEREIwQjY4NjQ0RTgxNjU5MDc0QUVEOTU0ODU5OTU4ODFEMzlGRTBDRTAxRjI1ODZFQjQ5MDlCMThBNUJGfEFTSEFVQVMgQVNVSEFTSFUgQVNVSCIsIm5hc2NpbWVudG8iOiIwOC8xMC8xOTkxIiwiZWFzeS1pbmRleCI6IkFBQUFFcnc0eHV3TVU5SDNGYXhHbWtzR1Z6TjY4M2JYNDNncVBqcUVTd2tzMk1HeGUyYlZESldpRjZhT3NBPT0iLCJrZXkiOiJUWFZqYUNCbGRtbHNJSE52YjI0Z2FHbG5hQ0JwYmlCb2IzQmxJR1J2SUhacFpYYz0iLCJleHAiOjE2NzkwNjIyNzEsImlhdCI6MTY3OTA2MTk3MX0.P3RGITQt8jkXf3eCZ-N7k7xMuRjA_ks1U3nPzSQlC7o';
 */
  /* const options = {
    appkey: appKey,
    token: '',
    environment: '.HML',
    baseUrl: 'https://comercial.certiface.com.br:8443/',
    apparence: {
      backgroundColor: '#025951',
      loadingColor: '#0CF25D',
    },
  }; */
  return (
    <DocumentsCopyView
      options={options}
      navigation={navigation}
      callbackView="Home"
      /* CustomInstructionView={<InstructionsView navigation={navigation} />}
      CustomPermissionView={CustomPermissionView} */
    />
  );
}
