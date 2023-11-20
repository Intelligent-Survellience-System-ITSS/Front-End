import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// importing components:
import colors from '../globals/Colors';

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

export default SplashScreen;