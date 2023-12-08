import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { Easing, withTiming, useSharedValue, useDerivedValue, withSpring } from 'react-native-reanimated';

import colors from '../globals/Colors';

const WelcomeScreen = ({ navigation }) => {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.ease) });
  }, []);

  const handleStart = () => {
    navigation.replace('HomeScreen');
  };

  return (
    <Animated.View style={[styles.container, { opacity: opacity }]}>
      <Text style={styles.title}>Welcome to{' '}
        <Text style={styles.itss}>
            ITSS
        </Text>
      </Text>
      <TouchableOpacity style={styles.startButton} onPress={handleStart}>
        <Text style={styles.buttonText}>Let's Start</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black_darker,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 20,
  },
  itss: {
    color: colors.orange
  },
  startButton: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },
});

export default WelcomeScreen;