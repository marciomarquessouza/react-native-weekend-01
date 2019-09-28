import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ColorToneSelector = ({color, colorValue, handleIncrease, handleDecrease}) => {
    return (
        <View>
            <Text>{ color } ({ colorValue })</Text>
            <Button 
                title={`Increase ${ color }`}
                onPress = { handleIncrease }
            />
            <Button 
                title={`Decrease ${ color }`}
                onPress = { handleDecrease }
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ColorToneSelector;
