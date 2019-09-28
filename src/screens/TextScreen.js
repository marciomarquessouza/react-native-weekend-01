import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    return (
        <View>
            <Text>Please, input your name below:</Text>
            <TextInput
                style={ styles.input }
                autoCapitalize="none"
                autoCorrect={ false }
                value={ name }
                onChangeText={ (newText) => setName(newText) }
            />
            <Text>My name is { name }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: "black",
        borderWidth: 1
    }
});

export default TextScreen;
