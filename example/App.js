/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { WheelPicker } from 'react-native-wheel-picker-android'

const weekdays = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
];

const App: () => React$Node = () => {
  const [selectedItem, setSelectedItem] = useState(0)
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <Text>{weekdays[selectedItem]}</Text>
          <WheelPicker onItemSelected={(index) => setSelectedItem(index)} data={weekdays}/>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
