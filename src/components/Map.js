import React from 'react';
import { StyleSheet, Dimensions, Image } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const height = Dimensions.get('window').height;

const response = [
  {
    id: '123',
    coordinates: {
      latitude: -15.59611,
      longitude: -56.09667,
    },
    title: 'Cuiabá',
    description: 'Cuiabá',
    category: 1,
    icon: require('../../assets/mark1.png')
  },
  {
    id: '456',
    coordinates: {
      latitude: -20.44278,
      longitude: -54.64639,
    },
    title: 'Campo Grande',
    description: 'Campo Grande',
    category: 1,
    icon: require('../../assets/mark2.png')
  },
  {
    id: '789',
    coordinates: {
      latitude: -23.5489,
      longitude: -46.6388,
    },
    title: 'São Paulo',
    description: 'São Paulo',
    category: 1,
    icon: require('../../assets/mark1.png')
  },
  {
    id: '102',
    coordinates: {
      latitude: -22.9035,
      longitude: -43.2096,
    },
    title: 'Rio de Janeiro',
    description: 'Rio de Janeiro',
    category: 1,
    icon: require('../../assets/mark2.png')
  },
  {
    id: '103',
    coordinates: {
      latitude: -3.71839,
      longitude: -38.5434,
    },
    title: 'Ceará',
    description: 'Ceará',
    category: 1,
    icon: require('../../assets/mark2.png')
  },
];

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
         {response.map(marker => (
            <Marker
              key={marker.id}
              coordinate={marker.coordinates}
              title={marker.title}
              description={marker.description}
            >
              <Image source={marker.icon} style={{ height: 32, width:32 }} />
            </Marker>
          ))}
    </MapView>
  );
};


const styles = StyleSheet.create({
  map: {
      height
  }
});

export default Map;
