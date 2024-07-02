import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default function SignupScreen({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Hitch Hike</Text>
        <View style={styles.inputContent}>
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Enter Email"
          />
          <TextInput
            type="password"
            style={styles.inputs}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="Enter Password"
          />
          <TouchableOpacity 
            style={styles.loginOption}
            onPress={() => (navigation.navigate("Login"))}
          >
            <Text>Already got an account</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          // onPress={() => }
        >
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 0.7,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  header: {
    fontSize: 60,
    fontWeight: "700",
    textAlign: "center",
    color: 'black',
  },
  inputs: {
    width: 230,
    borderColor: '#D7D7D7',
    borderWidth: 2,
    padding: 12,
    borderRadius: 40,
  },
  inputContent: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  loginOption: {
    fontSize: 16,
    fontWeight: '500',
    color: '#E9A738',
  },
  loginButton: {
    padding: 18,
    borderRadius: 15,
    width: 200,
    backgroundColor: "#E9A738",
  },
  loginText: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    color: 'white',
  }
});