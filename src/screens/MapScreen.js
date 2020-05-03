import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import Map from '../components/Map';

const MapScreen = ({ navigation }) => {
  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default MapScreen;