import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Home from './src/screens/Home/Home';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.safeView}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
});

export default App;
