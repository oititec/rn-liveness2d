import * as React from 'react';

import { StyleSheet, View, Text, Button, Alert } from 'react-native';

import { startDocumentscopy, startFaceCaptcha } from '@oiti/rn-liveness2d';

export default function App() {
  const appKey =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZXJ0aWZhY2UiLCJ1c2VyIjoiMTlBMEY4NTczNzZGNzU0MTk4MzY1QTlEMDZFM0Q5QzM4NEIzfHNhZnJhLmVwZi5obWwiLCJlbXBDb2QiOiIwMDAwMDAwNTc2IiwiZmlsQ29kIjoiMDAwMDAwMjY2MiIsImNwZiI6IjU0MjczOTY2MDg1Iiwibm9tZSI6IjI4OTY3QjJGQzZDOTFBRDY2M0VGOUUzREZERjZGN0MzOTg2ODRBODEzRUNEOUExMjc2Nzc0MUQ3NUFCMkNGQ0E2OUY1NTBENjQzMjk1Rjg4MjkyQzJBRkFEQTYyQTYzMEUxMDg2MjlDQkMxNEQ1NjJBQ0E4NzBDNjg5MzZDMUJGfEFTSEFVQVMgQVNVSEFTSFUgQVNVSCIsIm5hc2NpbWVudG8iOiIwOC8xMC8xOTkxIiwiZWFzeS1pbmRleCI6IkFBQUFFaEova3k5N2lKcGZmYkNQTG0wRXFid3dCYVlOZjVkYjNYTzVIVHYva2NVRDJxb1V1d1ZWdnR6TWdRPT0iLCJrZXkiOiJRV3hzYjNkaGJtTmxJSEpsY0hWc2MybDJaU0J6WlhnZ2JXRjVJR052Ym5SaGFXND0iLCJleHAiOjE2NzEwMzEyMDYsImlhdCI6MTY3MTAyOTQwNn0.iZ0MzeWFTrjQ11EB0I5wHBVy_PerFVldU27rvnovxRM';

  return (
    <View style={styles.container}>
      <Text style={styles.box}>Exemplo Oiti - React Native</Text>
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
  box: {
    marginVertical: 20,
  },
  button: {
    marginVertical: 5,
  },
  boxResult: {
    marginVertical: 10,
  },
});
