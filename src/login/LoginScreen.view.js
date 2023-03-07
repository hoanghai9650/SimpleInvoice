import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './LoginScreen.styles';
export default function LoginScreenView(props) {
  const {handleLogin, setInput} = props;
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type 101 for login"
        style={styles.inputStyle}
        onChangeText={val => setInput(val)}
      />
      <TouchableOpacity style={styles.btnContainer} onPress={handleLogin}>
        <View>
          <Text>Log in</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
