import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import AddChat from "./screens/AddChat"
import ChatScreen from "./screens/ChatScreen"

const Stack = createStackNavigator();
const globalScreenOptions = {
  headerStyle: {backgroundColor: "#2C6BED"},
  headerTitleStyle: {color: "white", textAlign: "center", flex:1},
  headerTintColor: "white",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={
          globalScreenOptions
        }>
        <Stack.Screen  name="LoginScreen" component={LoginScreen} />
        <Stack.Screen  name="register" component={RegisterScreen} />
        <Stack.Screen  name="Home" component={HomeScreen} />
        <Stack.Screen  name="AddChat" component={AddChat} />
        <Stack.Screen  name="Chat" component={ChatScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});