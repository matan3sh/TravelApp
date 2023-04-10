import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

function AttractionDetails() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text>AttractionDetail</Text>
    </SafeAreaView>
  );
}

export default React.memo(AttractionDetails);
