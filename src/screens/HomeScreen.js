import React from 'react';
import { Button, Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style = { styles.textStyle }>Welcome to my first App (or not)</Text>
      <Button
        onPress = {() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        onPress = { () => navigation.navigate("List")}
        title = "Go to List Demo"
      />
      <Button
        onPress = { () => navigation.navigate("Image")}
        title = "Go to Image Demo"
      />
      <Button
        onPress = { () => navigation.navigate("Counter")}
        title = "Go to Counter Demo"
      />
      <Button
        onPress = { () => navigation.navigate("Color")}
        title = "Go to Color Demo"
      />
      <Button
        onPress = { () => navigation.navigate("Square")}
        title = "Go to Square Demo"
      />
      <Button
        onPress = { () => navigation.navigate("Text")}
        title = "Go to Text Demo"
      />
      <Button
        onPress = { () => navigation.navigate("Password")}
        title = "Go to Password Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    marginHorizontal: 10
  }
});

export default HomeScreen;
