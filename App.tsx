import React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/screens/Home/Home';
import AttractionDetails from './src/screens/AttractionDetails/AttractionDetails';
import Gallery from './src/screens/Gallery/Gallery';

export type RootStackParamList = {
  Home: undefined;
  AttractionDetails: {attractionId: number};
  Gallery: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AttractionDetails" component={AttractionDetails} />
        <Stack.Screen name="Gallery" component={Gallery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
