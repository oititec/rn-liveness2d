import * as React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';

export default function Home({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.box}>Exemplo Oiti - Hibridos</Text>
      <View style={styles.button}>
        <Button
          onPress={() => navigation.navigate('Liveness2D')}
          title="FaceCaptcha"
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => navigation.navigate('Documentscopy')}
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
