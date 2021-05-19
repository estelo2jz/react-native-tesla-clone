import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const StyledButton = (props) => {

  // to know if we are receiving the props from index in Caritem
  // console.warn(type);
  // const type = props.type;


  // this is how we get 2 different function and 2 different functionality to the same button using props
  // const content = props.content;
  // const onPress = props.onPress;

  // props destructuring
  const {content, type, onPress} = props;

  const backgroundColor = type === "primary" ? "#171a20cc" : "#ffffffa6";
  const textColor = type === "primary" ? "#ffffff" : "#171a20";

  return (
    <View style={styles.container}>
      <Pressable
      // dynamicly changes the styles with one component
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, {color: textColor}]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton
