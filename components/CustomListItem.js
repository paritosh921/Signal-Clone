import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import { db } from '../Firebase';

const CustomListItem = ({ id, chatName, enterChat }) => {
    return (
        <ListItem key={id} onPress={() => enterChat(id, chatName)} key={id} buttomDivider >
            <Avatar
                rounded
                source={{
                    uri:"https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800" }}>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle
                    numberOfLines={1}
                    ellipsizeMode='tail'>
                    ABC
                </ListItem.Subtitle>
            </ListItem.Content>



        </ListItem>
    )
}

export default CustomListItem;

const styles = StyleSheet.create({})
