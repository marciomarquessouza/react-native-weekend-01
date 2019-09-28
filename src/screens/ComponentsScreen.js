import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {

    const name = 'Marcio';

    return (
        <View>
            <Text style={ styles.title }>Get started with React Native!</Text>
            <Text style={ styles.subTitle }>My name is { name }</Text>
        </View>
        );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 45
    },
    subTitle: {
        fontSize: 20
    }
});

export default ComponentScreen;
