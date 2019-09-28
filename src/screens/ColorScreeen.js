import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    return (
        <View>
            <Button title = "Add a Color" onPress = {
                () => (setColors([...colors, randomColor()]))
            } />
            <FlatList
                data = { colors }
                keyExtractor = { (color) => color}
                renderItem = { ({ item }) => (
                    <View style = {{
                        width: 100,
                        height: 100,
                        backgroundColor: item
                    }}>
                    </View>
                )}
            >
            </FlatList> 
        </View>
    );
};

const styles = StyleSheet.create({});

const randomColor = () => {
    const randomRGB = () => Math.floor(Math.random() * 256);
    return `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
};

export default ColorScreen;
