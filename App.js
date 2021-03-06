import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import MapScreen from './src/screens/MapScreen.js';
import MapListScreen from './src/screens/MapListScreen';
import MapDetailScreen from './src/screens/MapDetailScreen.js';
import {setNavigator} from './src/navigationRef';
import Icon from 'react-native-vector-icons/Ionicons';
import { MapProvider } from './src/context/MapContext';

const mapListFlow = createStackNavigator({
  MapList: MapListScreen,
  MapDetail: MapDetailScreen,
});

mapListFlow.navigationOptions = {
  tabBarIcon:({ tintColor }) => (  
    <Icon name="ios-list" color={ tintColor}  size={ 30 }/>  
  )
};

const switchNavigator = createSwitchNavigator({
  mainFlow: createBottomTabNavigator({
    MapView: MapScreen,
    mapListFlow,
  }, {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#e91e63',
    }
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <MapProvider>
      <App
        ref={navigator => {
          setNavigator(navigator);
        }}
      />
    </MapProvider>
  );
};
