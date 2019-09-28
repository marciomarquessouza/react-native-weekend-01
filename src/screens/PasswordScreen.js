import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const PasswordScreen = () => {

    const [password, setPassword] = useState("");
    const [showMessage, setshowMessage] = useState(false);
    const checkPassSize = (newPass, size) => (newPass.length <= size);
    const shortPassWarning = "Password must be longer than 5 characters";

    return (
        <View>
            <Text style={ styles.textTitle }>Enter Password:</Text>
            <TextInput 
                style={ styles.input }
                autoCapitalize="none"
                autoCorrect= { false }
                value={ password }
                onChangeText={ (newPass) => {
                    setshowMessage(checkPassSize(newPass, 5))
                    setPassword(newPass);
                }}
            />
            { showMessage ? <Text style={ styles.textWarning }>{ shortPassWarning }</Text> : null }
        </View>
    );
};

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 30,
        fontWeight: "bold",
        margin: 10
    },
    textWarning: {
        fontSize: 18,
        fontWeight: "bold",
        margin: 10,
        color: 'red'
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 15
    }
});

export default PasswordScreen;
