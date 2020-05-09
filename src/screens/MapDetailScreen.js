import React from 'react';
import {Text, StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const MapDetailScreen = ({navigation}) => {
  const _id = navigation.getParam('_id');
  return (
    <>
      <Text style={{fontSize: 48}}>teste</Text>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width,
    height,
  },
});

export default MapDetailScreen;
