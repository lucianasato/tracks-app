import React from 'react';
import { YellowBox, Text, StyleSheet, Dimensions, Image, FlatList, ScrollView } from 'react-native';
import Spacer from '../components/Spacer';
import { SafeAreaView } from 'react-navigation';

YellowBox.ignoreWarnings([
	'VirtualizedLists should never be nested',
])

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height / 2;

const state = {
  data: [
    { id: "00", name: "image.png" },
    { id: "01", name: "image.png" },
    { id: "02", name: "image.png" },
    { id: "03", name: "image.png" },
    { id: "04", name: "image.png" },
    { id: "05", name: "image.png" },
    { id: "06", name: "image.png" },
    { id: "07", name: "image.png" },
    { id: "08", name: "image.png" },
    { id: "08", name: "image.png" },
    { id: "10", name: "image.png" },
    { id: "11", name: "image.png" },
    { id: "12", name: "image.png" },
    { id: "13", name: "image.png" },
    { id: "14", name: "image.png" },
    { id: "15", name: "image.png" }
  ]
};
const MapDetailScreen = ({navigation}) => {
  const _id = navigation.getParam('_id');
  const _name = navigation.getParam('_name');

  return (
    <>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
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
            data={state.data}
            keyExtractor={item => item.id}
            horizontal={false}
            numColumns={8}
            columnWrapperStyle={styles.row}
            renderItem={({ item }) => {
              return (
                <Image source={require('../../assets/image.png')} style={ styles.icon } />
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
  }
});

export default MapDetailScreen;
