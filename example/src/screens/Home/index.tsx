import * as React from 'react';

import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import type { ArgsType } from 'src/@types/ArgsType';

export default function Home({ navigation }: { navigation: any }) {
  const [options, setOptions] = React.useState<ArgsType>({
    appkey:
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZXJ0aWZhY2UiLCJ1c2VyIjoiM0JFQzZGNUYyRDQ1RTQ5Qzc0MDMwQTZGMDdBQ0VDNTE1fG1vYmlsZS5hcGlnbG9iYWwiLCJlbXBDb2QiOiIwMDAwMDAwNjc5IiwiZmlsQ29kIjoiMDAwMDAwMjc3NCIsImNwZiI6IjA4NjcwODMzOTU2Iiwibm9tZSI6IjBBNjU1RDA1MUE5RjEzRjk3MUM4M0U0NUUwM0M5QTA3NDlBMjgzODNGM0QyNjU2MDNCNkRCNjFFRUQ5MURBQTBBNDAwRTNFQzM4RERFQ0IwREEzNTA2NjMwOEM2RDg4NTUyMzE1QzE3RTA3MDQwNDdDM0NFREMwQTQ2MTZFfElHQUJSSUVMIENBVEVMTEkgR09VTEFSVCIsIm5hc2NpbWVudG8iOiIwOC8xMC8xOTk2IiwiZWFzeS1pbmRleCI6IkFBQUFFbTlwNlgyRnFNUFhiM1BORGR5SCtOVEhKc3dPWjRTNVVtSHpMU1lUQnByZnlMK3N2bnlFaVJ6QnZBPT0iLCJrZXkiOiJRMjl1YzJsa1pYSWdjM0JsWVd0cGJtY2diV1VnY0hKdmMzQmxZM1FnZDJoaGRHVT0iLCJleHAiOjE3MDc5ODczMDAsImlhdCI6MTcwNzk4NzAwMH0.IdN0R_33Y8tNnaBRxyGbr2ts7HhQyatvQfsVikPtFco',
    ticket: '',
    environment: 'HML',
    apparence: {
      backgroundColor: '#025951',
      loadingColor: '#0CF25D',
    },
    theme: {
      instructionBackButtonIcon: '123',
      instructionTitleText: 'Aro aqui eu To',
      instructionTitleColor: '#A5CD39',
      instructionBackgroundColor: '#A5CD39',
      instructionCaptionText: '#A5CD39',
      instructionBottomSheetBackgroundColor: '#333333',
      setCaptureBottomSheetBackground: '#A5CD39',
      rgTitleText: 'title RG',
      rgTitleColor: '#FFFFFF',
      rgCaptionText: 'rg lorem ipsummm',
      rgCaptionColor: '#FFFFFF',
      cnhTitleText: 'title CNH',
      cnhTitleColor: '#FFFFFF',
      cnhCaptionText: 'cnh lorem ipsummm',
      setCaptureBackgroundColor: '#A5CD39',
      textOkColor: '#FFFFFF',
      setBackgroundDismissColor: '#DD0101',
      setTryAgainColor: '#FFFFFF',
      setBackgroundOkColor: '#4bb75f',
      setTextFront: 'textFron',
      setTextBack: 'textBack',
      setCaptureInstructionGuideText: 'textGUIDE',
      setCaptureInstructionGuideBackgroundColor: '#DD0101',
      setCaptureInstructionGuideTextColor: '#4bb75f',
      setTextOk: 'textOk',
      setTextConfirmation: 'textConfirmation',
      setTextRedo: 'textRedo',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.box}>Exemplo Oiti - Hibridos</Text>
      <View style={styles.button}>
        <Button
          onPress={() =>
            navigation.navigate('Liveness2D', {
              options: options,
            })
          }
          title="FaceCaptcha"
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() =>
            navigation.navigate('Documentscopy', {
              options: options,
            })
          }
          title="Documentoscopia"
        />
      </View>
      <View style={styles.button}>
        <Text>AppKey</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setOptions({ ...options, appkey: text })}
          value={options.appkey}
          placeholder="AppKey"
        />
      </View>
      <View style={styles.button}>
        <Text>Ticket</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setOptions({ ...options, ticket: text })}
          value={options.ticket}
          placeholder="Token"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  box: {
    marginVertical: 20,
  },
  button: {
    width: '80%',
    marginVertical: 5,
  },
  boxResult: {
    marginVertical: 10,
  },
});
