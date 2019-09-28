import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

const ListScreen = () => {

    const friends = [
        { name: 'friend#01', age: 10 },
        { name: 'friend#02', age: 11 },
        { name: 'friend#03', age: 12 },
        { name: 'friend#04', age: 13 },
        { name: 'friend#05', age: 14 },
        { name: 'friend#06', age: 15 },
        { name: 'friend#07', age: 16 }
    ];

    return (
        <FlatList
            data = {friends}
            keyExtractor = {friend => friend.name}
            renderItem = {({ item }) => {
                return <Text style = {styles.textStyle}>
                    { item.name } - Age { item.age }
                </Text>;
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        marginVertical: 10
    }
});

export default ListScreen;
