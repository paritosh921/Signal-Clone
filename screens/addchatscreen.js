import React, { useLayoutEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button } from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome";
import { auth, db } from '../firebase';

const addchatscreen = ({ navigation }) => {
    const [input, setInput] = useState("");


    useLayoutEffect(() => {
        navigation.setOptions({
            title:"Add a new chat",
            headerBackTitle:"Chats",
        });
    }, [navigation]);

    const createChat = async () => {import React, { useLayoutEffect, useState } from "react";
    import { StyleSheet, Text, View } from "react-native";
    import styles from "./styles";
    import { Button, Input } from "react-native-elements";
    import Icon from "react-native-vector-icons/FontAwesome";
    import { db } from "../../Firebase";
    
    export default function index({ navigation }) {
      const [input, setInput] = useState("");
    
      const createChat = async () => {
        await db
          .collection("chats")
          .add({
            chatName: input,
          })
          .then(() => {
            navigation.goBack();
          })
          .catch((error) => alert(error));
      };
    
      useLayoutEffect(() => {
        navigation.setOptions({
          title: "Add new Chat",
          headerBackTitle: "Chats",
        });
      }, [navigation]);
    
      return (
        <View style={styles.container}>
          <Input
            placeholder="Enter a Chat name"
            value={input}
            onChangeText={(text) => setInput(text)}
            onSubmitEditing={createChat}
            leftIcon={
              <Icon name="wechat" type="antdesign" size={24} color="black" />
            }
          />
          <Button disabled={!input} onPress={createChat} title="Create a New Chat" />
        </View>
      );
    }
        await db.collection('chats').add({
            chatName: input
        }).then(() =>{
            navigation.goBack()
        }).catch(error => alert(error));
    };

    return (
        <View style={styles.container}>
            <Input
            placeholder='Enter a Chat '
            value={input}
            onChangeText={(text) => setInput(text)}
            onSubmitEditing={createChat}
            leftIcon={
                <Icon name='telegram' type="antdesign" size={24} color="#3a76f0"/>
            }
            />
            <Button onPress={createChat} title="Creat a new chat"/>
        </View>
    );
};

export default addchatscreen;

const styles = StyleSheet.create({
    continue:{
        backgroundColor:"white",
        padding: 30,
        height:'100%'
    }
});
const styles = StyleSheet.create({
    container: {
     backgroundColor: "white",
     padding: 30,
     height: "100%",
    },
  });
  
  export default styles;