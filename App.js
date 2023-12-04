import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// importing components:
// import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import HomeScreen from './components/HomeScreen';
import SplashScreen from './components/Splash';
import ProfileScreen from './components/ProfileScreen';
import Settings from './components/Settings';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false
        }}
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
        <Stack.Screen
          name='ProfileScreen'
          component={ProfileScreen}
        />

        <Stack.Screen
          name='Settings'
          component={Settings}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
