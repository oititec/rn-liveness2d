import * as React from 'react';

import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

export default function Home({ navigation }: { navigation: any }) {
  const [options, setOptions] = React.useState({
    appkey:
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZXJ0aWZhY2UiLCJ1c2VyIjoiNDQwNTVBMzVCQjM5MjUxMzkwQUJDNTg3N0I5RjVFQjd8aW50LmV2b2x1dGlvbi5obWwiLCJlbXBDb2QiOiIwMDAwMDAwNjczIiwiZmlsQ29kIjoiMDAwMDAwMjczOSIsImNwZiI6IjA4NjcwODMzOTU2Iiwibm9tZSI6IjVENzAxRjgzMjE3NDVFRjg0RkQ4MTc2NzZDMDlFRDczN0Y3MzM0RTMxNkQ2MTg5ODhGNDQ5MTQyOEY1NTg4QUZFREY2OTIwMDc5RTNCMjNGOEJCQjM5QTRENDc4Q0QyRUQ0RkVCMUUzNjAyN0RDOEYwQ0Q0MUREN0RDNzBDOTlCRUIxNjh8TU9CSUxFIFRFU1RFIEhNTCIsIm5hc2NpbWVudG8iOiIwMS8wMS8yMDAwIiwiZWFzeS1pbmRleCI6IkFBQUFFa2tSYzVOc1JmK0hRUlRuNkgxbGY3a3NCSUNab0hKRUVxRzFoWWJ3OFU0bmE3cTdDby9CbGJwRWxRPT0iLCJrZXkiOiJUWFZqYUNCbGRtbHNJSE52YjI0Z2FHbG5hQ0JwYmlCb2IzQmxJR1J2SUhacFpYYz0iLCJleHAiOjE3MDIwMDQyODksImlhdCI6MTcwMjAwMzk4OX0.BBXprgkx_8GJRXh2fc-5IHaZhe9lKqzkMAAEKutBs9I',
    ticket: '8f7965a8-c0d9-4742-92e6-22c01b47c574',
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
      cnhCaptionColor: '#FFFFFF',
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
