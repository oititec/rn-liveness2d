import * as React from 'react';

import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

export default function Home({ navigation }: { navigation: any }) {
  const [options, setOptions] = React.useState({
    appkey: '',
    ticket: '',
    environment: 'HML',
    apparence: {
      backgroundColor: '#025951',
      loadingColor: '#0CF25D',
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
        <TextInput
          style={styles.input}
          onChangeText={(text) => setOptions({ ...options, appkey: text })}
          value={options.appkey}
          placeholder="AppKey"
        />
      </View>
      <View style={styles.button}>
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
    justifyContent: 'center',
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
