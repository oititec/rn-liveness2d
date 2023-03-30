import * as React from 'react';

import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function InstructionsView({
  onVerify,
  onBack,
}: {
  onVerify(): void;
  onBack(): void;
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onBack()} style={styles.navigationBar}>
        <Image
          source={require('../../assets/images/left-arrow.png')}
          style={styles.leftArrow}
        />
      </TouchableOpacity>
      <View style={styles.imgContainer}>
        <Image
          source={require('../../assets/images/img_face.png')}
          style={styles.imgFace}
        />
      </View>

      <View style={styles.boxBtn}>
        <Text style={styles.title}>Reconhecimento Facial</Text>
        <Text style={styles.subtitle}>Isso garante que você é você mesmo.</Text>

        <View style={styles.intructions}>
          <View style={styles.rowInstructions}>
            <View style={styles.boxIcon}>
              <Image
                source={require('../../assets/images/lightbulb_outline.png')}
              />
            </View>
            <Text style={styles.boxText}>
              Escolha um ambiente bem iluminado.
            </Text>
          </View>
          <View style={styles.rowInstructions}>
            <View style={styles.boxIcon}>
              <Image source={require('../../assets/images/face.png')} />
            </View>
            <Text style={styles.boxText}>
              Não use acessórios como bonés, máscaras e afins.
            </Text>
          </View>
        </View>
        <View style={styles.viewBtn}>
          <TouchableOpacity onPress={() => onVerify()} style={styles.nextBtn}>
            <Text style={styles.nextText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1648CD',
    width: '100%',
    justifyContent: 'center',
  },
  rowInstructions: {
    width: '100%',
    flex: 2,
    alignItems: 'center',
    flexDirection: 'row',
  },
  viewBtn: {
    width: '90%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationBar: {
    width: '100%',
  },
  intructions: {
    width: '90%',
    flex: 1,
  },
  boxIcon: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    backgroundColor: '#F5f5f5',
    borderRadius: 100,
  },
  boxText: {
    paddingLeft: 20,
    width: '75%',
    color: '#000000',
    fontSize: 25,
  },
  imgContainer: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    marginTop: 30,
    marginLeft: 20,
    width: '90%',
    fontSize: 29,
    fontWeight: 'bold',
    /* fontFamily: 'Ubuntu-Bold', */
    color: '#1E1E1E',
  },
  nextBtn: {
    width: 300,
    backgroundColor: '#05D758',
    alignItems: 'center',
    fontWeight: 900,
    borderRadius: 50,
    marginTop: 0,
  },
  nextText: {
    /* fontFamily: 'Ubuntu-Medium', */
    fontSize: 25,
    margin: 13,
  },
  description_one: {
    textAlign: 'center',
    color: '#FFFFFF',
    /* fontFamily: 'Ubuntu-Bold', */
    fontSize: 30,
    marginLeft: 60,
    marginRight: 60,
    marginTop: 10,
  },
  boxInfo: {
    width: '100%',
    paddingTop: 15,
    alignItems: 'center',
    backgroundColor: '#037eee',
  },
  boxBtn: {
    width: '100%',
    flex: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  subtitle: {
    /* fontFamily: 'Ubuntu-Regular', */
    fontSize: 20,
    marginLeft: 20,
    width: '90%',
    color: '#666666',
    paddingBottom: 25,
  },
  iconTop: {
    marginTop: 60,
    marginLeft: 20,
    width: 55,
    height: 55,
  },
  leftArrow: {
    marginTop: 70,
    marginLeft: 20,
    width: 25,
    height: 25,
  },
  imgFace: {},
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
