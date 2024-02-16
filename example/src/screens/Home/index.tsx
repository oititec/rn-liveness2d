import * as React from 'react';

import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import type { ArgsType } from 'src/@types/ArgsType';

export default function Home({ navigation }: { navigation: any }) {
  const theme = {
    setInstructionBackgroundColor: '#000000',
    setInstructionBackButtonColorsIcon: '#FFFFFF',
    setInstructionBackButtonColorsBackground: '#000000',
    setInstructionBackButtonColorsBorder: '#333333',
    setInstructionLoadingColor: '#00FF00',
    setInstructionBottomSheetColor: '#FF0000',
    setInstructionBottomSheetRadius: 8,
    setInstructionTitleText: 'Example Title',
    setInstructionTitleColor: '#333333',
    //    setInstructionTitleFont: 'Arial',
    setInstructionCaptionText: 'Example Caption',
    setInstructionCaptionColor: '#666666',
    //  setInstructionCaptionFont: 'Arial',
    setInstructionDocOptionBackgroundColor: '#FF0000',
    setInstructionDocOptionTitleText: 'Doc Option Title',
    setInstructionDocOptionTitleColor: '#999999',
    //   setInstructionDocOptionTitleFont: 'Arial',
    setInstructionDocOptionBorderColor: '#CCCCCC',
    setInstructionDocOptionBorderWidth: 2,
    setInstructionDocOptionBorderRadius: 5,
    setInstructionEnvOptionBackgroundColor: '#EFEFEF',
    setInstructionEnvOptionTitleText: 'Env Option Title',
    setInstructionEnvOptionTitleColor: '#888888',
    //   setInstructionEnvOptionTitleFont: 'Arial',
    setInstructionEnvOptionBorderColor: '#BBBBBB',
    setInstructionEnvOptionBorderWidth: 3,
    setInstructionEnvOptionBorderRadius: 6,
    setInstructionContinueButtonBackgroundColor: '#FF9900',
    setInstructionContinueButtonHighlightedBackgroundColor: '#FFCC00',
    setInstructionContinueButtonBorderColor: '#FF6600',
    setInstructionContinueButtonHighlightedBorderColor: '#FF3300',
    setInstructionContinueButtonContentColor: '#FFFFFF',
    setInstructionContinueButtonHighlightedContentColor: '#CCCCCC',
    setInstructionContinueButtonTextColor: '#000000',

    //   setInstructionContinueButtonFont: '',
    setLoadingBackgroundColor: '#FFFFFF',
    setLoadingSpinnerColor: '#0CF25D',

    setLoadingSpinerWidth: 1,
    setLoadingSpinnerScale: 2,
    setCaptureBackgroundColor: '#C0C0C0',
    setTextFront: 'Front',
    setTextBack: 'Back',
    setCaptureInstructionGuideTextFront: 'Front Guide',
    setCaptureInstructionGuideTextBack: 'Back Guide',
    setTextOk: 'OK',
    setCaptureTakeNewPictureButtonText: 'Take New Picture',
    setCaptureInstructionGuideTextColor: '#555555',
    setTextConfirmation: 'Confirmation',
    setBackgroundOkColor: '#00CC00',
    setCaptureBackButtonIcon:
      'https://static.vecteezy.com/system/resources/previews/019/858/315/non_2x/back-flat-color-outline-icon-free-png.png',
    setCaptureBackButtonColorsIcon: '#FFFFFF',
    setCaptureBackButtonColorsBackground: '#000000',
    setCaptureBackButtonColorsBorder: '#333333',
    setCaptureCloseButtonColorsIcon: '#FFFFFF',
    setCaptureCloseButtonColorsBackground: '#000000',
    setCaptureCloseButtonColorsBorder: '#333333',
    setCaptureFrontIndicatorColor: '#FF0000',
    setCaptureFrontIndicatorFocusedStateColor: '#00FF00',
    setCaptureFrontIndicatorUnfocusedStateColor: '#0000FF',
    setCaptureBackIndicatorColor: '#00FF00',
    setCaptureBackIndicatorFocusedStateTextColor: '#FF0000',
    setCaptureBackIndicatorUnfocusedStateTextColor: '#0000FF',
    setCaptureInstructionTextColor: '#666666',
    setCapturePreviewBorderColorForCapture: '#00FF00',
    setCapturePreviewBorderColorForUncapturedState: '#FF0000',
    setCaptureCaptureButtonHighlightedStateColorsIcon: '#FFFFFF',
    setCaptureCaptureButtonHighlightedStateColorsBackground: '#FF0000',
    setCaptureCaptureButtonHighlightedStateColorsBorder: '#FFFFFF',
    setCaptureCaptureButtonNormalStateColorsIcon: '#FFFFFF',
    setCaptureCaptureButtonNormalStateColorsBackground: '#00FF00',
    setCaptureCaptureButtonNormalStateColorsBorder: '#333333',
    setCaptureCaptureButtonDisabledStateColorsIcon: '#666666',
    setCaptureCaptureButtonDisabledStateColorsBackground: '#CCCCCC',
    setCaptureCaptureButtonDisabledStateColorsBorder: '#999999',
    setCaptureBottomSheetShapeColor: '#FFFF00',
    setCaptureBottomSheetShapeCornerRadius: 10,
    setCaptureTakeNewPictureButtonHighlightedStateColorsText: '#FF0000',
    setCaptureTakeNewPictureButtonHighlightedStateColorsBackground: '#FFFFFF',
    setCaptureTakeNewPictureButtonHighlightedStateColorsBorder: '#00FF00',
    setCaptureTakeNewPictureButtonNormalStateColorsText: '#00FF00',
    setCaptureTakeNewPictureButtonNormalStateColorsBackground: '#333333',
    setCaptureTakeNewPictureButtonNormalStateColorsBorder: '#00FF00',
    setCaptureTakeNewPictureButtonDisabledStateColorsText: '#CCCCCC',
    setCaptureTakeNewPictureButtonDisabledStateColorsBackground: '#666666',
    setCaptureTakeNewPictureButtonDisabledStateColorsBorder: '#333333',
    setCaptureUsePictureButtonText: 'Use Picture',
    setCaptureUsePictureButtonConfirmationText: 'Confirm Use',
    setCaptureUsePictureButtonHighlightedStateColorsText: '#FFFFFF',
    setCaptureUsePictureButtonHighlightedStateColorsBackground: '#FF9900',
    setCaptureUsePictureButtonHighlightedStateColorsBorder: '#FF6600',
    setCaptureUsePictureButtonNormalStateColorsText: '#000000',
    setCaptureUsePictureButtonNormalStateColorsBackground: '#FFCC00',
    setCaptureUsePictureButtonNormalStateColorsBorder: '#FF3300',
    setCaptureUsePictureButtonDisabledStateColorsText: '#CCCCCC',
    setCaptureUsePictureButtonDisabledStateColorsBackground: '#666666',
    setCaptureUsePictureButtonDisabledStateColorsBorder: '#333333',
    setResultBackgroundColorSuccess: '#00FF00',
    setResultBackgroundColorError: '#FF0000',
    setResultBackgroundColorTryAgain: '#0000FF',
    setResultMessageSuccess: 'Success!',
    setResultMessageError: 'Error!',
    setResultMessageTryAgain: 'Try Again!',
    setResultMessageColorSuccess: '#00FF00',
    setResultMessageColorError: '#FF0000',
    setResultMessageColorTryAgain: '#0000FF',
    setResultTryAgainButtonText: 'Try Again Button',
    setResultTryAgainButtonHighlightedStateColorsText: '#FFFFFF',
    setResultTryAgainButtonHighlightedStateColorsBackground: '#333333',
    setResultTryAgainButtonHighlightedStateColorsBorder: '#555555',
    setResultTryAgainButtonNormalStateColorsText: '#333333',
    setResultTryAgainButtonNormalStateColorsBackground: '#FFFFFF',
    setResultTryAgainButtonNormalStateColorsBorder: '#444444',
  };

  const [options, setOptions] = React.useState<ArgsType>({
    appkey:
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZXJ0aWZhY2UiLCJ1c2VyIjoiRDQzMDM1M0ZERTQ1NTE3NkEwNzUwMEQyRDRENkNFRUYwfG1vYmlsZS5hcGlnbG9iYWwiLCJlbXBDb2QiOiIwMDAwMDAwNjc5IiwiZmlsQ29kIjoiMDAwMDAwMjc3NCIsImNwZiI6IjA4NjcwODMzOTU2Iiwibm9tZSI6IkE0MEVDOTUxODg0MzNCMUY0MUM5QjYzNEQ2NEQ2N0MyNEYxNjg0MTQ4QzY2RUM4OUM4RjBENEQyNTE2MzI1ODcxRTc4NTJBQzIxQUNFODNGRjhBRDExRENENTQ3ODE0NDEzQzAxQzgyRTc3MTJDMDJCQkIwMjgxRTQzNDY0fElHQUJSSUVMIENBVEVMTEkgR09VTEFSVCIsIm5hc2NpbWVudG8iOiIwOC8xMC8xOTk2IiwiZWFzeS1pbmRleCI6IkFBQUFFbU16bDZUREVZSzBVQUlMaVQvcFpya21YcC9jbDNZQlFuaTJXRTc3a2I1anlkdk5CSy9QSm1LeHl3PT0iLCJrZXkiOiJUWFZqYUNCbGRtbHNJSE52YjI0Z2FHbG5hQ0JwYmlCb2IzQmxJR1J2SUhacFpYYz0iLCJleHAiOjE3MDgxMTA5OTMsImlhdCI6MTcwODExMDY5M30.WPFo0e75dOL2bjv2nMe-R2RXd_UET0xv0n78v5_1GwE',
    ticket: '3453453453453453453453242234234324234234234423',
    environment: 'HML',
    nativeCustom: false,
  });

  const toggleSwitch = (value: boolean) =>
    setOptions({ ...options, nativeCustom: value });

  const toggleEnvironment = (value: boolean) =>
    setOptions({ ...options, environment: value ? 'PRD' : 'HML' });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.containerScroll}
    >
      <ScrollView style={styles.containerScroll}>
        <View style={styles.container}>
          <Text style={styles.box}>
            Exemplo Oiti | <Text style={styles.boldText}>2D</Text> | React
            Native
          </Text>
          <View style={styles.button}>
            <Pressable
              onPress={() =>
                navigation.navigate('Liveness2D', {
                  options: options,
                })
              }
              style={styles.buttonDefault}
            >
              <Text style={styles.textBtn}>FaceCaptcha</Text>
            </Pressable>
          </View>
          <View style={styles.spacae}></View>
          <View style={styles.divider}></View>
          <View style={styles.spacae}></View>
          <View style={styles.button}>
            <Pressable
              onPress={() =>
                navigation.navigate('Documentscopy', {
                  options: options,
                })
              }
              style={styles.buttonDefault}
            >
              <Text style={styles.textBtn}>DocCore</Text>
            </Pressable>
          </View>
          <View style={styles.button}>
            <Pressable
              onPress={() =>
                navigation.navigate('Documentscopy', {
                  options: options,
                  theme: theme,
                })
              }
              style={styles.buttonDefault}
            >
              <Text style={styles.textBtn}>DocCore Custom</Text>
            </Pressable>
          </View>
          <View style={styles.spacae}></View>
          <View style={styles.divider}></View>

          <View style={styles.switch}>
            <View style={styles.col50l}>
              <Text style={styles.text}>Usar telas Hibridas/Nativas</Text>
              <Text style={styles.subtext}>
                {options.nativeCustom ? 'Nativo' : 'Hibrido'}
              </Text>
            </View>
            <View style={styles.col50r}>
              <Switch
                trackColor={{ false: '#767577' }}
                thumbColor={options.nativeCustom ? '#0CF25D' : '#0CF25D'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={(value) => toggleSwitch(value)}
                value={options.nativeCustom}
              />
            </View>
          </View>
          <View style={styles.divider}></View>

          <View style={styles.switch}>
            <View style={styles.col50l}>
              <Text style={styles.text}>Ambiente</Text>
              <Text style={styles.subtext}>
                {options.environment === 'HML' ? 'Homologação' : 'Produção'}
              </Text>
            </View>
            <View style={styles.col50r}>
              <Switch
                trackColor={{ false: '#767577' }}
                thumbColor={options.nativeCustom ? '#0CF25D' : '#0CF25D'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={(value) => toggleEnvironment(value)}
                value={options.environment === 'HML' ? false : true}
              />
            </View>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.spacae}></View>
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
        <View style={styles.spacae}></View>
        <View style={styles.spacae}></View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    overflow: 'scroll',
  },
  containerScroll: {
    flex: 1,
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
  text: {
    fontSize: 14,
    fontWeight: '700',
    color: 'black',
  },
  boldText: {
    fontWeight: '900',
  },
  subtext: {
    fontSize: 10,
    color: '#444',
  },
  divider: {
    width: '80%',
    marginVertical: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  spacae: {
    height: 5,
    marginVertical: 5,
  },
  switch: {
    width: '80%',
    marginVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  col50l: {
    width: '60%',
    color: 'black',
    justifyContent: 'flex-start',
  },
  col50r: {
    width: '40%',
    color: 'black',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  boxResult: {
    marginVertical: 10,
  },
  buttonDefault: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#0CF25D',
  },
  textBtn: {
    color: 'black',
    fontWeight: '700',
  },
});
