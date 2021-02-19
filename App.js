import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';

import ImageScreen from './src/screens/ImageScreen';
import ModalScreen from './src/screens/Modal';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    Images: ImageScreen,
    Modal: ModalScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
