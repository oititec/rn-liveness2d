import * as React from 'react';

import { StyleSheet, View, Text, Button, Alert } from 'react-native';

import { startDocumentscopy, startFaceCaptcha } from '@oiti/oiti-react-native';

export default function App() {
  const appKey =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZXJ0aWZhY2UiLCJ1c2VyIjoiNkFBRkI5MTNFNzZBRDc4Mjc5NkNFMzcwNjU3N0Q0Q0E0NjZDfHNhZnJhLmVwZi5obWwiLCJlbXBDb2QiOiIwMDAwMDAwNTc2IiwiZmlsQ29kIjoiMDAwMDAwMjY2MiIsImNwZiI6IjU0MjczOTY2MDg1Iiwibm9tZSI6IjI5RTcxQkU5OTU4ODUwNzIyRkYyMUNBNEZEMDEzQTYzN0UyRjJFQUQzMTE4QzQ5NUUxMjQ2QUQzOEY3OENFQUU5Q0FFQTY0NkM2Rjk2M0I5MzFERUNDQ0QxNDE4RjI5RUE2N0YyQzc4NzlCNTlENTAxOTUxMEFCNDZEQzVBNTgxfEFTSEFVQVMgQVNVSEFTSFUgQVNVSCIsIm5hc2NpbWVudG8iOiIwOC8xMC8xOTkxIiwiZWFzeS1pbmRleCI6IkFBQUFFazVITFVVcTFUY2lHdFJjNU4zMENIVDNvcUl5NlVKdDEweGRZYTczWnorUkpVOXFiMlVOU3lHYU1BPT0iLCJrZXkiOiJRV3hzYjNkaGJtTmxJSEpsY0hWc2MybDJaU0J6WlhnZ2JXRjVJR052Ym5SaGFXND0iLCJleHAiOjE2Njk5OTA4ODQsImlhdCI6MTY2OTk4OTA4NH0.dK6-L0GxQocDX7aQOqZ-m-VU2dA2KasHjriXV6Pn63A';

  return (
    <View style={styles.container}>
      <Text style={styles.box}>Exemplo Oiti - React Native</Text>
      <View style={styles.button}>
        <Button
          onPress={() => {
            startFaceCaptcha(appKey).then(
              (result) => {
                result && Alert.alert('RESULT OK');
              },
              (error) => {
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
              (result) => {
                result && Alert.alert('RESULT OK');
              },
              (error) => {
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
