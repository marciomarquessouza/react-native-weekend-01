import React, { useReducer } from 'react';
import { StyleSheet, View } from 'react-native';
import ColorToneSelector from '../components/ColorToneSelector';

const COLOR_INCREMENT = 5;
const reducer = (state, action) => {

    switch (action.type) {
        case "change_red":
            return state.red > 255 || state.red < 0
            ? state
            : { ...state, red: state.red + action.payload };
        case "change_green":
            return state.green > 255 || state.green < 0
            ? state
            : { ...state, green: state.green + action.payload };
        case "change_blue":
            return state.blue > 255 || state.blue < 0
            ? state
            : { ...state, blue: state.blue + action.payload };
        default:
            return state;
    }
}

const SquareScreen = () =>  {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0});
    const { red, green, blue} = state;

    return (
        <View>
            <ColorToneSelector 
                color="Red"
                colorValue={ red }
                handleIncrease = { () => dispatch({ type: "change_red", payload: COLOR_INCREMENT }) }
                handleDecrease = { () => dispatch({ type: "change_red", payload: COLOR_INCREMENT * -1 }) }
            />
            <ColorToneSelector 
                color="Green"
                colorValue={ green }
                handleIncrease = { () => dispatch({ type: "change_green", payload: COLOR_INCREMENT }) }
                handleDecrease = { () => dispatch({ type: "change_green", payload: COLOR_INCREMENT * -1 }) }
            />
            <ColorToneSelector 
                color="Blue"
                colorValue={ blue }
                handleIncrease = { () => dispatch({ type: "change_blue", payload: COLOR_INCREMENT }) }
                handleDecrease = { () => dispatch({ type: "change_blue", payload: COLOR_INCREMENT * -1 }) }
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
