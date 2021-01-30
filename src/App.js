import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Detail, Explore, Account} from './pages';
import {colors} from '../src/utils';
import {IconAccount, IconExplore, IconHome} from './assets';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Menu() {
  return (
    <Tab.Navigator tabBarOptions={{activeTintColor: colors.yellow}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({activeTintColor}) => (
            <Icon
              name="home-outline"
              color={activeTintColor ? 'yellow' : 'black'}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          title: 'Explore',
          tabBarIcon: ({activeTintColor}) => (
            <Icon name="search-outline" color={activeTintColor} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          title: 'You',
          tabBarIcon: ({activeTintColor}) => (
            <Icon name="person-outline" color={activeTintColor} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Menu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
