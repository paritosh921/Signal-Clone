import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, Text, View } from "react-native";
import styles from "./styles";
import { Button, Input, Image, ButtonGroup } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { auth } from "../../Firebase";

const index = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });
    return unsubscribe
  }, []);

  const register = () => {navigation.navigate("register")};
  const signIn = () => {
    auth.signInWithEmailAndPassword(email,password)
    .catch((error) => alert(error));
  };



  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container} >
      <View>
        <StatusBar style="light" />
        <Image
          source={{
            uri:
              "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
        />
      </View>
      <Button containerStyle={styles.button} onPress={signIn} title="Login" />
      <Button
        containerStyle={styles.button}
        type="outline"
        onPress={register}
        title="Register"
      />
      <View style={{height:100}} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems:"center",
      justifyContent: "center",
      padding: 10,
      backgroundColor: "white"
    },
    inputContainer: {
        width:300
    },
    button: {
        width:200,
        marginTop:10,
    },
  });
  

export default index;