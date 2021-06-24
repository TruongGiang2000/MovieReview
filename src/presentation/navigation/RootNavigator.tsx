import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {enableScreens} from 'react-native-screens';
import {RootStoreState} from '@shared-state';
import {SplashScreen, Home} from '@containers';
import {MyTab} from './Bottomnavigation';
enableScreens();
const Stack = createNativeStackNavigator();

export const RootNavigator: React.FC = () => {
  const splashLoad = useSelector(
    (state: RootStoreState) => state.systems.splashLoad,
  );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!__DEV__ && !splashLoad ? (
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        ) : (
          <Stack.Screen name="MyTab" component={MyTab} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
