import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Principal} from './src/screens/Principal';
import {List} from './src/screens/List';

export type ScreenNames = ["Home", "List"] // type these manually
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Principal}/>
          <Stack.Screen name="List" component={List}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}


