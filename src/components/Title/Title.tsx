import React from 'react';
import {Text, TextStyle} from 'react-native';
import {styles} from './styles';

interface TitleProps {
  text: string;
  style?: TextStyle;
}

export default function Title({text, style}: TitleProps) {
  return <Text style={[styles.title, style]}>{text}</Text>;
}
