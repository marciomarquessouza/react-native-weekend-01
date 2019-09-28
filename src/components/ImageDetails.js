import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';

const ImageDetail = ({ title, imageSource, score }) => {
    return (
        <View>
            <Text style = { styles.textTitle }>{ title }</Text>
            <Image style = { styles.imageStyle } source = { imageSource }/>
            <Text style = { styles.textStyle } >Image Score: { score }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textTitle: {
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 20,
        marginHorizontal: 20
    },
    imageStyle: {
        marginHorizontal: 20
    },
    textStyle: {
        fontSize: 16,
        marginVertical: 20,
        marginHorizontal: 20
    }
});

export default ImageDetail;
