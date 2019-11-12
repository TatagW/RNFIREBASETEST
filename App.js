import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {auth} from './config/firebase'
export default function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [log, setLog] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const refresh = () => {
    auth.onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        setIsLogin(true)
        // ...
      } else {
        // User is signed out.
        // ...
      }
    });
    
  }
  const register = () => {
    auth.createUserWithEmailAndPassword(email, password).then(()=> setLog(true)).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
      // ...
    });
  }
  const login = () => {
    auth.signInWithEmailAndPassword(email, password).then().catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
      // ...
    });
  }
  useEffect(() => {
    refresh()

  }, [])
  return (
    <View style={styles.container}>
      {
        isLogin ?
        (
          <Text>sudah login</Text>
        ):
        (
          log ? 
          <>
            <TextInput placeholder="email" onChangeText={val => setEmail(val)} />
            <TextInput placeholder="password" onChangeText={val => setPassword(val)} />
            <Button title={"login"} onPress={login} />
            <Text onPress={() => setLog(false)}>ke reg</Text>
          </>
          :
          <>
            <TextInput placeholder="email" onChangeText={val => setEmail(val)} />
            <TextInput placeholder="password" onChangeText={val => setPassword(val)} />
            <Button title={"register"} onPress={register} />
            <Text onPress={() => setLog(true)}>ke log</Text>
          </>
        )
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
