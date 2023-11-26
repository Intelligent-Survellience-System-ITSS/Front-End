import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import { SafeAreaView } from 'react-native-safe-area-context';

// importing globals:
import colors from '../globals/Colors';


export default function Header() {
  const navigation = useNavigation();
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleProfileClick = () => {
    // navigate to ProfileScreen
    navigation.navigate('ProfileScreen');
  };

  const handleITSSClick = () => {
    // assume this takes the user to the home screen
    navigation.navigate('HomeScreen');
  };

  const toggleMenu = () => {
    // toggle the menu visibility
    setMenuVisible(!isMenuVisible);
  };

  const goToLogin = () => {
    navigation.replace("Login")
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.headerItem} onPress={handleProfileClick}>
          <Ionicons name="person-outline" size={24} color={colors.white} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.headerItem} onPress={handleITSSClick}>
          <Text style={styles.ITSS}>ITSS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.headerItem} onPress={toggleMenu}>
          <Ionicons name="menu-outline" size={24} color={colors.white} style={styles.icon} />
        </TouchableOpacity>

        <Modal isVisible={isMenuVisible} onBackdropPress={toggleMenu}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Button 1')}>
              <Text style={styles.menuItemText}>Button 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Button 2')}>
              <Text style={styles.menuItemText}>Button 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={goToLogin}>
              <Text style={styles.menuItemText}>Log out</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.white,
    flex: 0.1,
    justifyContent: 'space-between', // equal spacing between the views
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  headerItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  ITSS: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.orange,
  },
  modalContainer: {
    backgroundColor: colors.black,
    padding: 20,
    borderRadius: 10,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.white,
  },
  menuItemText: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
  },
});
