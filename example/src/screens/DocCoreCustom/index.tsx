import * as React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function DocCoreCustom({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { theme } = route.params;
  const [jsonValues, setJsonValues] = React.useState(theme);

  const handleInputChange = (key: any, value: any) => {
    setJsonValues((prevValues: any) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.containerScroll}
    >
      <ScrollView style={styles.containerScroll}>
        <View style={styles.viewScroll}>
          {Object.entries(jsonValues).map(([key, value]) => (
            <View style={styles.view2} key={key}>
              <View style={styles.view}>
                <Text>{key}</Text>
                <TextInput
                  style={{
                    width: '100%',
                    height: 40,
                    borderWidth: 2,
                    padding: 10,
                    borderRadius: 4,
                    borderColor: `${value}`,
                  }}
                  placeholder={key}
                  //@ts-ignore
                  value={value}
                  onChangeText={(newValue) => handleInputChange(key, newValue)}
                />
              </View>

              <View style={styles.divider}></View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.buttonView}>
        <Pressable
          onPress={() =>
            navigation.navigate('Home', {
              newTheme: jsonValues,
            })
          }
          style={styles.buttonDefault}
        >
          <Text style={styles.textBtn}>Aplicar</Text>
        </Pressable>
      </View>
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
    backgroundColor: '#FFF',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
  box: {
    marginVertical: 20,
  },
  buttonView: {
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 25 : 10,
    paddingTop: Platform.OS === 'ios' ? 10 : 10,
  },
  view: {
    width: '100%',
    marginVertical: 5,
  },
  view2: {
    width: '90%',
    marginVertical: 5,
  },
  viewScroll: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 60 : 10,
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
    width: '100%',
    marginVertical: 5,
    borderBottomColor: '#666666',
    borderBottomWidth: 1,
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
    width: '80%',
    marginVertical: 5,
  },
  textBtn: {
    color: 'black',
    fontWeight: '700',
  },
});
