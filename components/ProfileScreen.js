import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../globals/Colors';

export default function ProfileScreen({ navigation }) {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [designation, setDesignation] = useState('Software Engineer');
  const [employeeId, setEmployeeId] = useState('12345');

  const goBack = () => {
    navigation.goBack();
  };

  const goToHomeScreen = () => {
    navigation.navigate('HomeScreen');
  };

  const handleUpdateProfile = () => {
    // Perform the logic to update the profile on your backend or storage
    // For demonstration purposes, we will just log the updated values
    console.log('Updated Profile:');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Designation:', designation);
    console.log('Employee ID:', employeeId);
  };

  return (
    <>
        <View style={styles.header}>
            <TouchableOpacity onPress={goBack}>
            <Ionicons name="arrow-back" size={24} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.headerText}>ITSS</Text>
        </View>

        <View style={styles.container}>
        <View style={styles.headerLine} />

        <View style={styles.content}>
            <Text style={styles.profileHeading}>Profile</Text>

            <View style={styles.inputContainer}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your first name"
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
            />
            </View>

            <View style={styles.inputContainer}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your last name"
                value={lastName}
                onChangeText={(text) => setLastName(text)}
            />
            </View>

            <View style={styles.inputContainer}>
            <Text style={styles.label}>Designation</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your designation"
                value={designation}
                onChangeText={(text) => setDesignation(text)}
            />
            </View>

            <View style={styles.inputContainer}>
            <Text style={styles.label}>Employee ID</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your employee ID"
                value={employeeId}
                onChangeText={(text) => setEmployeeId(text)}
            />
            </View>

            <TouchableOpacity style={styles.updateButton} onPress={handleUpdateProfile}>
            <Text style={styles.updateButtonText}>Update Profile</Text>
            </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.itssContainer} onPress={goToHomeScreen}>
            <Text style={styles.itssText}>ITSS</Text>
        </TouchableOpacity>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black_darker,
    padding: 20,
  },
  icon: {
    color: 'white',
    marginLeft: 10
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.black,
    flex: 0.075,
    borderBottomColor: colors.orange
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.orange,
    marginLeft: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.orange,
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 15,
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: colors.white,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    color: colors.white,
  },
  updateButton: {
    backgroundColor: colors.orange,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  updateButtonText: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 16,
  },
  itssContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  itssText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.orange,
  },
});
