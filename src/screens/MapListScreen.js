import React from 'react';
import { StyleSheet, Image, FlatList, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-navigation';
import {ListItem} from 'react-native-elements';

const response = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Item 1',
    image: require('../../assets/image-list.png'),
    facilities: [
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
      { id: "10", name: require('../../assets/money.png') }
    ]
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Item 2',
    image: require('../../assets/image-list.png'),
    facilities: [
      { id: "00", name: require('../../assets/toilet.png') },
      { id: "01", name: require('../../assets/wifi.png') },
      { id: "02", name: require('../../assets/shower.png') },
      { id: "03", name: require('../../assets/water.png') },
      { id: "05", name: require('../../assets/tent1.png') },
      { id: "06", name: require('../../assets/tent2.png') },
      { id: "07", name: require('../../assets/transport.png') },
      { id: "09", name: require('../../assets/washing-machine.png') },
      { id: "10", name: require('../../assets/money.png') }
    ]
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Item 3',
    image: require('../../assets/image-list.png'),
    facilities: [
      { id: "00", name: require('../../assets/toilet.png') },
      { id: "02", name: require('../../assets/shower.png') },
      { id: "04", name: require('../../assets/hiking.png') },
      { id: "05", name: require('../../assets/tent1.png') },
      { id: "06", name: require('../../assets/tent2.png') },
      { id: "08", name: require('../../assets/vehicle.png') },
      { id: "09", name: require('../../assets/washing-machine.png') },
      { id: "10", name: require('../../assets/money.png') }
    ]
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b3',
    name: 'Item 4',
    image: require('../../assets/image-list.png'),
    facilities: [
      { id: "00", name: require('../../assets/toilet.png') },
      { id: "01", name: require('../../assets/wifi.png') },
      { id: "02", name: require('../../assets/shower.png') },
      { id: "03", name: require('../../assets/water.png') },
      { id: "05", name: require('../../assets/tent1.png') },
      { id: "06", name: require('../../assets/tent2.png') },
      { id: "07", name: require('../../assets/transport.png') },
      { id: "09", name: require('../../assets/washing-machine.png') },
      { id: "10", name: require('../../assets/money.png') }
    ]
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',
    name: 'Item 5',
    image: require('../../assets/image-list.png'),
    facilities: [
      { id: "00", name: require('../../assets/toilet.png') },
      { id: "01", name: require('../../assets/wifi.png') },
      { id: "02", name: require('../../assets/shower.png') },
      { id: "03", name: require('../../assets/water.png') },
      { id: "06", name: require('../../assets/tent2.png') },
      { id: "07", name: require('../../assets/transport.png') },
      { id: "08", name: require('../../assets/vehicle.png') },
      { id: "09", name: require('../../assets/washing-machine.png') },
      { id: "10", name: require('../../assets/money.png') }
    ]
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d71',
    name: 'Item 6',
    image: require('../../assets/image-list.png'),
    facilities: [
      { id: "00", name: require('../../assets/toilet.png') },
      { id: "01", name: require('../../assets/wifi.png') },
      { id: "02", name: require('../../assets/shower.png') },
      { id: "03", name: require('../../assets/water.png') },
      { id: "04", name: require('../../assets/hiking.png') },
      { id: "05", name: require('../../assets/tent1.png') },
      { id: "06", name: require('../../assets/tent2.png') },
      { id: "07", name: require('../../assets/transport.png') },
      { id: "08", name: require('../../assets/vehicle.png') },
    ]
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d41',
    name: 'Item 7',
    image: require('../../assets/image-list.png'),
    facilities: [
      { id: "00", name: require('../../assets/toilet.png') },
      { id: "01", name: require('../../assets/wifi.png') },
      { id: "02", name: require('../../assets/shower.png') },
      { id: "03", name: require('../../assets/water.png') },
      { id: "04", name: require('../../assets/hiking.png') },
      { id: "06", name: require('../../assets/tent2.png') },
      { id: "07", name: require('../../assets/transport.png') },
      { id: "08", name: require('../../assets/vehicle.png') },
      { id: "09", name: require('../../assets/washing-machine.png') },
      { id: "10", name: require('../../assets/money.png') }
    ]
  },
  {
    id: 'bd7a234-c1sdf-46c2-aed5-3ad53abb28ba',
    name: 'Item 8',
    image: require('../../assets/image-list.png'),
    facilities: [
      { id: "02", name: require('../../assets/shower.png') },
      { id: "03", name: require('../../assets/water.png') },
      { id: "04", name: require('../../assets/hiking.png') },
      { id: "05", name: require('../../assets/tent1.png') },
      { id: "06", name: require('../../assets/tent2.png') },
      { id: "07", name: require('../../assets/transport.png') },
      { id: "08", name: require('../../assets/vehicle.png') },
      { id: "09", name: require('../../assets/washing-machine.png') },
      { id: "10", name: require('../../assets/money.png') }
    ]
  },
  {
    id: '3acfsdfc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Item 9',
    image: require('../../assets/image-list.png'),
    facilities: [
      { id: "00", name: require('../../assets/toilet.png') },
      { id: "01", name: require('../../assets/wifi.png') },
      { id: "02", name: require('../../assets/shower.png') },
      { id: "03", name: require('../../assets/water.png') },
      { id: "04", name: require('../../assets/hiking.png') },
      { id: "05", name: require('../../assets/tent1.png') },
      { id: "08", name: require('../../assets/vehicle.png') },
      { id: "09", name: require('../../assets/washing-machine.png') },
      { id: "10", name: require('../../assets/money.png') }
    ]
  },
  {
    id: '5869234f-3da1-471f-bd96-145571e29d72',
    name: 'Item 10',
    image: require('../../assets/image-list.png'),
    facilities: [
      { id: "02", name: require('../../assets/shower.png') },
      { id: "03", name: require('../../assets/water.png') },
      { id: "04", name: require('../../assets/hiking.png') },
      { id: "05", name: require('../../assets/tent1.png') },
      { id: "06", name: require('../../assets/tent2.png') },
      { id: "07", name: require('../../assets/transport.png') },
      { id: "08", name: require('../../assets/vehicle.png') },
      { id: "09", name: require('../../assets/washing-machine.png') },
      { id: "10", name: require('../../assets/money.png') }
    ]
  },
  {
    id: 'bd7acfa-c232b1-46c2-aed5-3ad53abb28b3',
    name: 'Item 11',
    image: require('../../assets/image-list.png'),
    facilities: [
      { id: "00", name: require('../../assets/toilet.png') },
      { id: "01", name: require('../../assets/wifi.png') },
      { id: "02", name: require('../../assets/shower.png') },
      { id: "03", name: require('../../assets/water.png') },
      { id: "04", name: require('../../assets/hiking.png') },
      { id: "05", name: require('../../assets/tent1.png') },
      { id: "06", name: require('../../assets/tent2.png') },
      { id: "07", name: require('../../assets/transport.png') },
      { id: "10", name: require('../../assets/money.png') }
    ]
  },
  {
    id: '3ac68afc-35-48d3-a4f8-fbd91aa97f62',
    name: 'Item 12',
    image: require('../../assets/image-list.png'),
    facilities: [
      { id: "00", name: require('../../assets/toilet.png') },
      { id: "01", name: require('../../assets/wifi.png') },
      { id: "05", name: require('../../assets/tent1.png') },
      { id: "06", name: require('../../assets/tent2.png') },
      { id: "07", name: require('../../assets/transport.png') },
      { id: "08", name: require('../../assets/vehicle.png') },
      { id: "09", name: require('../../assets/washing-machine.png') },
      { id: "10", name: require('../../assets/money.png') }
    ]
  },
  {
    id: '58asd0f-3da1-471f-bd96-234234234',
    name: 'Item 13',
    image: require('../../assets/image-list.png'),
    facilities: [
      { id: "00", name: require('../../assets/toilet.png') },
      { id: "01", name: require('../../assets/wifi.png') },
      { id: "02", name: require('../../assets/shower.png') },
      { id: "03", name: require('../../assets/water.png') },
      { id: "04", name: require('../../assets/hiking.png') },
      { id: "05", name: require('../../assets/tent1.png') },
      { id: "10", name: require('../../assets/money.png') }
    ]
  },
  {
    id: '58asd0f-3da1-471f-234-145571e29d41',
    name: 'Item 14',
    image: require('../../assets/image-list.png'),
    facilities: [
      { id: "00", name: require('../../assets/toilet.png') },
      { id: "01", name: require('../../assets/wifi.png') },
      { id: "02", name: require('../../assets/shower.png') },
      { id: "04", name: require('../../assets/hiking.png') },
      { id: "06", name: require('../../assets/tent2.png') },
      { id: "07", name: require('../../assets/transport.png') },
      { id: "08", name: require('../../assets/vehicle.png') },
      { id: "09", name: require('../../assets/washing-machine.png') },
      { id: "10", name: require('../../assets/money.png') }
    ]
  },
];

const MapListScreen = ({ navigation }) => {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={ response }
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('MapDetail', {_id: item.id, _name: item.name})
                  }>
                  <ListItem 
                    chevron 
                    bottomDivider
                    title={item.name}
                    subtitle={
                      <View style={styles.subtitleView}>
                        {
                          item.facilities.map((item) => {
                            return (
                              <Image key={item.id} source={item.name} style={styles.icons}/>
                            );
                          })
                        }
                        
                      </View>
                    }
                    leftAvatar={
                      <View>
                        <Image source={item.image} style={styles.image}/>
                      </View>
                    }
                 />
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
    flex: 1
  },
  subtitleView: {
    flexDirection: 'row',
    paddingTop: 5,
    flexWrap: 'wrap'
  },
  image: {
    height: 130,
    width: 130
  },
  icons: {
    height: 22,
    width: 22,
    margin: 3
  }
});

export default MapListScreen;