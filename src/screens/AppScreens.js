import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Pokemon, Evolution} from 'modules';

const AppStack = createStackNavigator();

const AppScreens = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="login"
      component={Home}
      options={{headerShown: false}}
    />
    <AppStack.Screen
      name="pokemon"
      component={Pokemon}
      options={({route}) => ({title: route.params.name.toUpperCase()})}
    />
    <AppStack.Screen
      name="evolution"
      component={Evolution}
      options={{
        headerTitle: 'Evolución',
      }}
    />
  </AppStack.Navigator>
);

export default AppScreens;
