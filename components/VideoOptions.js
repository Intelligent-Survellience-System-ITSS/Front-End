import React from 'react';
import { View, Modal, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../globals/Colors';

const VideoOptions = ({ visible, onClose, onOptionSelect }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
          >
            <Ionicons name="close" size={24} color={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onOptionSelect('Option 1')}>
            <Text style={styles.optionText}>Option 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onOptionSelect('Option 2')}>
            <Text style={styles.optionText}>Option 2</Text>
          </TouchableOpacity>
          {/* Add more options as needed */}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: colors.black_darker,
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  optionText: {
    color: colors.white,
    fontSize: 18,
    marginVertical: 10,
  },
});

export default VideoOptions;
