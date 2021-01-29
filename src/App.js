import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Detail, Explore, Account} from './pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Menu() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{tabBarBadge: 3}} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Account" component={Account} />
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
