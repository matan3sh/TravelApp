import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {styles} from './styles';

export default function Title() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Titlex</Text>
      </View>
    </SafeAreaView>
  );
}
