import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// importing components:
import Login from './components/Login';
import Signup from './components/Signup';
import HomeScreen from './components/HomeScreen';
import SplashScreen from './components/Splash';
import ProfileScreen from './components/ProfileScreen';
import WelcomeScreen from './components/WelcomeScreen';
import Settings from './components/Settings';
import AboutUs from './components/AboutUs';

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
          name="WelcomeScreen"
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
        />
        <Stack.Screen
          name='ProfileScreen'
          component={ProfileScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
