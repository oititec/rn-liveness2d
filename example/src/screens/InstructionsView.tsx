import * as React from 'react';

import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { normalize } from '../utils/normalize';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const scaleW = SCREEN_WIDTH / 320;
const scaleH = SCREEN_HEIGHT / 920;

import { startFaceCaptcha } from '@oiti/rn-liveness2d';

export default function InstructionsView({ navigation }: { navigation: any }) {
  const appKey =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZXJ0aWZhY2UiLCJ1c2VyIjoiNzg3MzdCRjY1N0NEOTMwOEQyNzlBODIxRUM4MDEzQjU3fG9pdGkuZmFjZXRlYy5obWwiLCJlbXBDb2QiOiIwMDAwMDAwMDAxIiwiZmlsQ29kIjoiMDAwMDAwMjc2OSIsImNwZiI6IjU0MjczOTY2MDg1Iiwibm9tZSI6IkYxQTJFNDE5OTY0QkJEQ0RGMzU1MDBCNDY3QzhCMUUwNkU5MTIwMTA0NDZGMDYwNkI5QUFGODU5ODI1MTREMTAwQjU0MTZFNUJGM0U4Rjg1OEVGNUNGQkRERTQ0MkYzQjhEOUIyREY3MTU4RDdENTg1RDNDN0YzRDk3ODlDRkEwfEFTSEFVQVMgQVNVSEFTSFUgQVNVSCIsIm5hc2NpbWVudG8iOiIwOC8xMC8xOTkxIiwiZWFzeS1pbmRleCI6IkFBQUFFc1RVL1hNSjNuQWN3UVJWeWl3Nmo1Zi9uVzdGYVUvdEdrbFErUTI4dklRWUN1VkNONnA5aFIwNXVBPT0iLCJrZXkiOiJRV0pzWlNCaGJpQm9iM0JsSUc5bUlHSnZaSGt1SUVGdWVTQnVZWGtnYzJoNWJtVT0iLCJleHAiOjE2NzkwNjIwOTAsImlhdCI6MTY3OTA2MTc5MH0.ll6M-OK5Y5WchhCebGCnB4Mye6GuKwqH6zmhjyxZP8I';

  const options = {
    appkey: appKey,
    environment: '.HML',
    baseUrl: '',
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/wave_bg.png')}
        resizeMode="cover"
        style={styles.waveTop}
      >
        <TouchableOpacity onPress={() => navigation.goBack(null)}>
          <Image
            source={require('../assets/images/left-arrow.png')}
            style={styles.leftArrow}
          />
        </TouchableOpacity>
        <Image
          source={require('../assets/images/scan-facial.png')}
          style={styles.iconTop}
        />
        <Text style={styles.title}>Reconhecimento Facial</Text>
        <Text style={styles.subtitle}>Isso garante que você é você mesmo.</Text>
        <View style={styles.instruction_one}>
          <View style={styles.instruction_one}>
            <>
              <ImageBackground
                style={styles.imgInstructions}
                source={require('../assets/images/illumination.png')}
                resizeMode="cover"
              />
              <View style={styles.boxInfo}>
                <Text style={styles.description_one}>
                  Escolha um ambiente bem iluminado.
                </Text>
              </View>
            </>
          </View>
        </View>
        <View style={styles.boxBtn}>
          <TouchableOpacity
            onPress={() => startFaceCaptcha(options)}
            style={styles.nextBtn}
          >
            <Text style={styles.nextText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '101%',
    justifyContent: 'center',
  },
  title: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 29,
    fontWeight: 'bold',
    /* fontFamily: 'Ubuntu-Bold', */
    color: '#FFFFFF',
  },
  nextBtn: {
    width: 300,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: normalize(30, scaleH),
  },
  nextText: {
    /* fontFamily: 'Ubuntu-Medium', */
    fontSize: normalize(25, scaleW),
    margin: normalize(13, scaleW),
  },
  imgInstructions: {
    height: '100%',
    flex: 1,
    aspectRatio: 4 / 4.4,
  },
  description_one: {
    textAlign: 'center',
    color: '#FFFFFF',
    /* fontFamily: 'Ubuntu-Bold', */
    fontSize: normalize(20, scaleW),
    marginLeft: 60,
    marginRight: 60,
    marginTop: normalize(10, scaleH),
  },
  boxInfo: {
    width: '100%',
    paddingTop: 15,
    alignItems: 'center',
    backgroundColor: '#037eee',
  },
  boxBtn: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#037eee',
  },
  subtitle: {
    /* fontFamily: 'Ubuntu-Regular', */
    fontSize: 16,
    marginLeft: 20,
    color: '#FFFFFF',
  },
  instruction_one: {
    width: '100%',
    height: normalize(530, scaleH),
  },
  iconTop: {
    marginTop: normalize(60, scaleH),
    marginLeft: 20,
    width: normalize(50, scaleW),
    height: normalize(50, scaleH),
    aspectRatio: 4 / 4.4,
  },
  leftArrow: {
    marginTop: normalize(70, scaleH),
    marginLeft: 20,
    width: 25,
    height: 25,
  },
  waveTop: {
    flex: 1,
    width: '100%',
    height: 400,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
