import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { Provider } from './src/context/BlogContext'

import IndexScreen from './src/screens/IndexScreen';
import EditScreen from './src/screens/EditScreen';
import CreateScreen from './src/screens/CreateScreen';
import ShowScreen from './src/screens/ShowScreen';

const navigation = createStackNavigator({
  Index: IndexScreen,
  Edit: EditScreen,
  Create: CreateScreen,
  Show: ShowScreen,
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});

const App = createAppContainer(navigation);

export default () => {
  return <Provider><App /></Provider>;
}
