import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Title from '../../components/Title/Title';
import {styles} from './styles';

export default function Home() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title />
      </View>
    </SafeAreaView>
  );
}
