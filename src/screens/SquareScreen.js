import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ColorToneSelector from '../components/ColorToneSelector';

const SquareScreen = () =>  {

    const COLOR_INCREMENT = 5;
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const increaseColor = (color) => ((color <= 255) ? (color + COLOR_INCREMENT) : 255);
    const decreaseColor = (color) => ((color >= 0) ? (color - COLOR_INCREMENT) : 0);

    return (
        <View>
            <ColorToneSelector 
                color="Red"
                colorValue={ red }
                handleIncrease = { () => setRed(increaseColor(red))}
                handleDecrease = { () => setRed(decreaseColor(red))}
            />
            <ColorToneSelector 
                color="Green"
                colorValue={ green }
                handleIncrease = { () => setGreen(increaseColor(green))}
                handleDecrease = { () => setGreen(decreaseColor(green))}
            />
            <ColorToneSelector 
                color="Blue"
                colorValue={ blue }
                handleIncrease = { () => setBlue(increaseColor(blue))}
                handleDecrease = { () => setBlue(decreaseColor(blue))}
            />
            <View
                style = {{
                    width: 100,
                    height: 100,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`
                }} 
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;
