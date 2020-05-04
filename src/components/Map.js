import React, {useContext} from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';
import MapView, {Polyline, Circle} from 'react-native-maps';

const height = Dimensions.get('window').height;

const Map = () => {
  return (
    <MapView
      style={styles.map}
      loadingEnabled={true}
      region={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
      }}>
        <MapView.Marker
          coordinate={{latitude: 37.78825,
          longitude: -122.4324}}
          title={"MEU TITULO 1..."}
          description={"MINHA DESCRIÇÃO 1"}
         />
         <MapView.Marker
          coordinate={{latitude: 37.78925,
          longitude: -122.4324}}
          title={"MEU TITULO 2"}
          description={"MINHA DESCRIÇÃO 2"}
         />
      </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
      height
  }
});

export default Map;
