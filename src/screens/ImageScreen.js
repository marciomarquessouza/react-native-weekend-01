import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetails';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail
                title="Forest"
                imageSource = { require('../../assets/forest.jpg') }
                score = { 9 }
            />
            <ImageDetail
                title="Mountain"
                imageSource = { require('../../assets/mountain.jpg') }
                score = { 10 }
            />
            <ImageDetail
                title="Beach"
                imageSource = { require('../../assets/beach.jpg') }
                score = { 8 }
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;
