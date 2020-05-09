import React from 'react';
import { StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-navigation';
import {ListItem} from 'react-native-elements';

const response = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Item 1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Item 2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Item 3',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b3',
    name: 'Item 4',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',
    name: 'Item 5',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d71',
    name: 'Item 6',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d41',
    name: 'Item 7',
  },
  {
    id: 'bd7a234-c1sdf-46c2-aed5-3ad53abb28ba',
    name: 'Item 8',
  },
  {
    id: '3acfsdfc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Item 9',
  },
  {
    id: '5869234f-3da1-471f-bd96-145571e29d72',
    name: 'Item 10',
  },
  {
    id: 'bd7acfa-c232b1-46c2-aed5-3ad53abb28b3',
    name: 'Item 11',
  },
  {
    id: '3ac68afc-35-48d3-a4f8-fbd91aa97f62',
    name: 'Item 12',
  },
  {
    id: '58asd0f-3da1-471f-bd96-234234234',
    name: 'Item 13',
  },
  {
    id: '58asd0f-3da1-471f-234-145571e29d41',
    name: 'Item 14',
  },
];

const MapListScreen = ({ navigation }) => {
    return (
      <>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
          <FlatList
            data={ response }
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('MapDetail', {_id: item.id, _name: item.name})
                  }>
                  <ListItem chevron title={item.name}>
                    <Image source={require('../../assets/image.png')} style={ styles.image } />
                  </ListItem>
                </TouchableOpacity>
              );
            }}
          />
        </SafeAreaView>
      </>
    );
};

MapListScreen.navigationOptions = {
  title: "Lista",
  tabBarIcon:({ tintColor }) => (  
    <Icon name="ios-list" color={ tintColor}  size={ 30 }/>  
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dcda48",
    // margin: 4,
    padding: 10
  }
});

export default MapListScreen;