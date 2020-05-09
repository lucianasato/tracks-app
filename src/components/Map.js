import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView, {Polyline, Circle} from 'react-native-maps';

const height = Dimensions.get('window').height;

const Map = () => {
  return (
    <MapView
      style={styles.map}
      loadingEnabled={true}
      region={{
      latitude: -15.59612,
      longitude: -56.09667,
      latitudeDelta: 70,
      longitudeDelta: 1,
      }}>
        <MapView.Marker
          coordinate={
            {
              latitude: -15.59611,
              longitude: -56.09667
            }
          }
          title={"Cuiabá"}
          description={"Cuiabá"}
         />
        <MapView.Marker
          coordinate={
            {
              latitude: -20.44278,
              longitude: -54.64639
            }
          }
          title={"Campo Grande"}
          description={"Campo Grande"}
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
