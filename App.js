import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// importing components:
// import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import HomeScreen from './components/HomeScreen';
import colors from './globals/Colors';

const Stack = createStackNavigator();

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.replace("Login");
    }, 3000);

    return () => clearTimeout(timeoutId); // Clear the timeout if the component unmounts
  }, [navigation]);

  return (
    <View style={styles.splashView}>
      <Text style={styles.splashText}>ITSS</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        headerMode="none"
      >
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
        />
        {/* <Stack.Screen
          name="HomePage"
          component={HomePage}
        /> */}
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  splashView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  splashText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.orange,
  },
});

export default App;
