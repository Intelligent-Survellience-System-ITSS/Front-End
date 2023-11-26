import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// importing components:
import colors from '../globals/Colors';

const SplashScreen = () => {
    const navigation = useNavigation();
  
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        navigation.replace("Login");
      }, 2000);
  
      return () => clearTimeout(timeoutId); // Clear the timeout if the component unmounts
    }, [navigation]);
  
    return (
      <SafeAreaView>
        <View style={styles.splashView}>
          <Text style={styles.splashText}>ITSS</Text>
        </View>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    splashView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.black,
    },
    splashText: {
      fontSize: 32,
      fontWeight: 'bold',
      color: colors.orange,
    },
  });

export default SplashScreen;