import * as React from 'react';

import { StyleSheet, View, Text, Button, Alert, TextInput } from 'react-native';

import { startDocumentscopy, startFaceCaptcha } from '@oiti/rn-liveness2d';

export default function App() {
  const [appKey, setAppkey] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.box}>Exemplo Oiti - React Native</Text>
      <View style={styles.box2}>
        <TextInput
          style={styles.input}
          onChangeText={setAppkey}
          value={appKey}
          placeholder="APP KEY"
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => {
            startFaceCaptcha(appKey).then(
              (result: string) => {
                result && Alert.alert(result);
              },
              (error: string) => {
                console.log(error);
              }
            );
          }}
          title="FaceCaptcha"
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => {
            startDocumentscopy(appKey).then(
              (result: string) => {
                result && Alert.alert(result);
              },
              (error: string) => {
                console.log(error);
              }
            );
          }}
          title="Documentoscopia"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '70%',
    fluz: 1,
    borderRadius: 7,
    margin: 5,
    backgroundColor: '#e3e3e3',
    borderColor: '#c3c3c3',
    borderWidth: 1,
    padding: 10,
  },
  box: {
    marginVertical: 20,
  },
  box2: {
    marginVertical: 8,
    width: '100%',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 5,
  },
  boxResult: {
    marginVertical: 10,
  },
});
