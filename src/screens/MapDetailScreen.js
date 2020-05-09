import React from 'react';
import { YellowBox, Text, StyleSheet, Dimensions, Image, FlatList, ScrollView, View } from 'react-native';
import Spacer from '../components/Spacer';
import { SafeAreaView } from 'react-navigation';

YellowBox.ignoreWarnings([
	'VirtualizedLists should never be nested',
])

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height / 2;

const data = [
    { id: "00", name: require('../../assets/toilet.png') },
    { id: "01", name: require('../../assets/wifi.png') },
    { id: "02", name: require('../../assets/shower.png') },
    { id: "03", name: require('../../assets/water.png') },
    { id: "04", name: require('../../assets/hiking.png') },
    { id: "05", name: require('../../assets/tent1.png') },
    { id: "06", name: require('../../assets/tent2.png') },
    { id: "07", name: require('../../assets/transport.png') },
    { id: "08", name: require('../../assets/vehicle.png') },
    { id: "09", name: require('../../assets/washing-machine.png') },
    { id: "10", name: require('../../assets/money.png') },
  ];

const MapDetailScreen = ({navigation}) => {
  const _id = navigation.getParam('_id');
  const _name = navigation.getParam('_name');

  MapDetailScreen.navigationOptions = {
    title: _name
  };
  
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView scrollEnabled={true}>
          <Image source={require('../../assets/image.png')} style={ styles.image } />
          <Spacer>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Description</Text>
            <Text style={{fontSize: 16}}>
              Description Description Description Description 
              Description Description Description Description
              Description Description Description Description 
              Description Description Description Description
              Description Description Description Description 
              Description Description Description Description
              Description Description Description Description 
              Description Description Description Description
              Description Description Description Description 
              Description Description Description Description
              Description Description Description Description 
              Description Description Description Description
            </Text>
          </Spacer>
          <Spacer>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Facilities</Text>
              <FlatList
                style={styles.list}
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={item => item.id}
                horizontal={false}
                numColumns={11}
                renderItem={({ item }) => {
                  return (
                    <Image source={item.name} style={ styles.icon } />
                  );
                }}
              />
          </Spacer>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height,
    width
  },
  icon: {
    height: 24,
    width: 24,
    margin: 4,
  },
  list: {
    margin: 3
  }
});

export default MapDetailScreen;
