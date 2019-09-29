import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={ styles.viewStyle }>
            <View style={ styles.viewChildRed }/>
            <View style={ styles.viewChildGreen }/>
            <View style={ styles.viewChildPurple }/>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        height: 200,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    viewChildRed: {
        width: 100,
        height: 100,
        borderWidth: 3,
        borderColor: 'crimson',
        backgroundColor: 'red'
    },
    viewChildGreen: {
        alignSelf: 'flex-end',
        width: 100,
        height: 100,
        borderWidth: 3,
        borderColor: 'darkgreen',
        backgroundColor: 'green'
    },
    viewChildPurple: {
        width: 100,
        height: 100,
        borderWidth: 3,
        borderColor: 'darkmagenta',
        backgroundColor: 'purple'
    },
});

export default BoxScreen;
