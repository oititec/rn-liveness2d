import * as React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import { normalize } from '../../utils/normalize';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const scaleW = SCREEN_WIDTH / 320;
const scaleH = SCREEN_HEIGHT / 920;

export default function InstructionsView({
  onContinue,
  onBack,
}: {
  onContinue(): void;
  onBack(): void;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.boxImg}>
        <TouchableOpacity onPress={() => onBack()} style={styles.navigationBar}>
          <Image
            source={require('../../assets/images/left-arrow.png')}
            style={styles.leftArrow}
          />
        </TouchableOpacity>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../assets/images/img_documento.png')}
            style={styles.imgFace}
          />
        </View>
      </View>

      <View style={styles.boxBtn}>
        <Text style={styles.title}>Documentos</Text>
        <Text style={styles.subtitle}>Selecione uma opção</Text>

        <View style={styles.intructions}>
          <TouchableOpacity
            onPress={() => onContinue()}
            style={styles.rowInstructions}
          >
            <View style={styles.boxIcon}>
              <Image source={require('../../assets/images/imgOp.png')} />
            </View>
            <View>
              <Text style={styles.boxText}>CNH</Text>
              <Text style={styles.boxTextSub}>
                Remova seu documento do plástico e comece.
              </Text>
            </View>
            <View style={styles.arrowContainer}>
              <Image
                source={require('../../assets/images/rigth-arrow.png')}
                style={styles.rigthArrow}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onContinue()}
            style={styles.rowInstructions}
          >
            <View style={styles.boxIcon}>
              <Image source={require('../../assets/images/imgOp.png')} />
            </View>
            <View>
              <Text style={styles.boxText}>RG</Text>
              <Text style={styles.boxTextSub}>
                Remova seu documento do plástico e comece.
              </Text>
            </View>
            <View style={styles.arrowContainer}>
              <Image
                source={require('../../assets/images/rigth-arrow.png')}
                style={styles.rigthArrow}
              />
            </View>
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
  boxTextSub: {
    paddingLeft: 20,
    width: '75%',
    color: '#666666',
    fontSize: normalize(20, scaleW),
  },
  rowInstructions: {
    width: '100%',
    flex: 3,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    padding: 15,
    marginTop: 10,
    borderRadius: 15,
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
    paddingBottom: 55,
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
    fontSize: normalize(25, scaleW),
  },
  imgContainer: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  arrowContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    marginTop: 30,
    marginLeft: 20,
    width: '90%',
    fontSize: normalize(29, scaleW),
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
    flex: Platform.OS === 'ios' ? 1 : 1.3,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  boxImg: {
    width: '100%',
    flex: 1,
    height: '100%',
    alignItems: 'center',
  },
  subtitle: {
    /* fontFamily: 'Ubuntu-Regular', */
    fontSize: normalize(20, scaleW),
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
    marginTop: normalize(70, scaleH),
    marginLeft: 20,
    marginBottom: 10,
    width: normalize(20, scaleW),
    height: normalize(20, scaleH),
  },
  rigthArrow: {
    width: 25,
    height: 25,
    left: -90,
  },
  imgFace: {
    height: '100%',
    flex: 1,
    aspectRatio: 4 / 4.6,
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
