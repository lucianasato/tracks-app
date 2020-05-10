import React, { useState } from 'react';
import { StyleSheet, Dimensions, Image, View, Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

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
  const [spot, setSpot] = useState(null);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <MapView
        style={styles.map}
        loadingEnabled={true}
        region={{
        latitude: -15.59612,
        longitude: -56.09667,
        latitudeDelta: 70,
        longitudeDelta: 1,
        }}
        onPress={(event) => {
          setVisible(false);
        }}>
          {response.map(marker => (
              <Marker
                key={marker.id}
                identifier={marker.id}
                coordinate={marker.coordinates}
                title={marker.title}
                showsUserLocation={true}
                onPress={(event) => {
                  setSpot(event._targetInst.return.key);
                  setVisible(true);
                }}
              >
                <Image source={marker.icon} style={{ height: 32, width:32 }} />
              </Marker>
            ))}
      </MapView>
      {
        spot && visible ? (
          <TouchableWithoutFeedback onPress={() => {
            setVisible(true);
          }}>
            <View style={styles.card}>
                <Image source={require('../../assets/image.png')} style={styles.imageDetail} />
                <Text style={styles.descriptionDetail}>Campo Grande</Text>
                <FlatList 
                  horizontal={false}
                  numColumns={9}
                  style={styles.listDetail}
                  data={[
                    {key: 'toilet', icon: require('../../assets/toilet.png')},
                    {key: 'wifi', icon: require('../../assets/wifi.png')},
                    {key: 'shower', icon: require('../../assets/shower.png')},
                    {key: 'water', icon: require('../../assets/water.png')},
                    {key: 'hiking', icon: require('../../assets/hiking.png')},
                    {key: 'tent1', icon: require('../../assets/tent1.png')},
                    {key: 'tent2', icon: require('../../assets/tent2.png')},
                    {key: 'transport', icon: require('../../assets/transport.png')},
                    {key: 'vehicle', icon: require('../../assets/vehicle.png')},
                    {key: 'washing-machine', icon: require('../../assets/washing-machine.png')},
                    {key: 'money', icon: require('../../assets/money.png')},
                  ]}
                  renderItem={({item}) => <Image key={item.key} source={item.icon} style={styles.imageIcons}/>}
                />
              </View>
          </TouchableWithoutFeedback>
        ) : <View />
      }
    </>
  );
};

const styles = StyleSheet.create({
  map: {
      height
  },
  card: {
    overflow: "hidden",
    backgroundColor: "#fff",
    height: 120,
    width: width - 20,
    position: "absolute",
    margin: 10,
    bottom: 50,
    shadowColor: "#000",
    shadowOffset: {
      x: 2,
      y: -2
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 20,
    borderStyle: "solid",
    borderColor: "#DDD",
    padding: 8,
    borderRadius: 8,
  },
  imageDetail: { 
    height: 100,
    width:100,
    margin: 0,
  },
  descriptionDetail: {
    position: "absolute",
    paddingLeft: width / 2,
    paddingTop: 10,
    textAlign: "center",
    fontWeight: 'bold',
  },
  listDetail: {
    position: "absolute",
    marginLeft: 120,
    marginTop: 40,
  },
  imageIcons: {
    margin: 3,
    marginBottom: 1,
    height: 20,
    width: 20,
  }
});

export default Map;
