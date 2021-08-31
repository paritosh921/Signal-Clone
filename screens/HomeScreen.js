import React, { useEffect, useLayoutEffect, useState } from 'react'
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
// import styles from "./styles";
import CustomListItem from "../components/CustomListItem"
import { Avatar, registerCustomIconType } from 'react-native-elements';
import { auth, db } from '../firebase';
import { TouchableOpacity } from 'react-native';
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import addchatscreen from './addchatscreen';
import ChatScreen from './ChatScreen';

const HomeScreen = ({ navigation }) => {
    const [ chats, setChats ] = useState([]);


    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace("Login");
        });
    };

    useEffect(() => {
        const unsubscribe = db.collection('chats').onSnapshot((snapshot) => {
            setChats(
                snapshot.docs.map((doc)=>({
                id: doc.id,
                data: doc.data()
            })));
        })
        return unsubscribe;
    },[]);


    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Signal",
            flex:1,
            justifyContent:'center',
            alignItems: 'center',
            headerStyle: { backgroundColor: "#fff" },
            headerTitleStyle: { color: "black" },
            headerTintColor: 'black',
            headerLeft: () => (
                <View style={{marginLeft:20}} >
                    <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
                    <Avatar rounded source={{ uri: auth?.currentUser?.photoURL}} />
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () => (
                <View
                    style={styles.stud}>

                    <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign name="camerao" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('addchatscreen')} activeOpacity={0.5}>
                        <SimpleLineIcons  name="pencil" size={24} color="black" />
                    </TouchableOpacity>

                </View>
            )
        });

    }, [navigation]);

    const enterChat = (id, chatName) => {
        navigation.navigate("Chat", {
            key:{id},
            id: {id},
            chatName: {chatName},
            enterChat:{enterChat}
        })
    }
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                {chats.map(({id, data: {chatName}}) =>(
                    <CustomListItem key={id}id={id} chatName={ chatName } enterChat={enterChat}/>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};


export default HomeScreen;



const styles = StyleSheet.create({
    container: {
        height: "100%",

    },
    stud: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: "20",
        width: 80
    }
});


