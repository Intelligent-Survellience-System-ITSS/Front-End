import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo vector icons

// importing components:
import Header from './Header';
import colors from '../globals/Colors';

const HomeScreen = () => {
  const [videoFiles, setVideoFiles] = useState([]);

  useEffect(() => {
    const fetchVideoFiles = async () => {
      try {
        // Check if the platform is web
        const isWeb = typeof window !== 'undefined';

        if (isWeb) {
          console.warn('File system operations are not supported on the web platform.');
          // You might want to use a placeholder or fetch video files from a different source on the web
          return;
        }

        const videosDirectory = `${FileSystem.documentDirectory}videos`;

        // Check if the directory exists
        const directoryInfo = await FileSystem.getInfoAsync(videosDirectory);

        if (!directoryInfo.exists || !directoryInfo.isDirectory) {
          // If the directory doesn't exist, create it
          await FileSystem.makeDirectoryAsync(videosDirectory, { intermediates: true });
        }

        // Read files from the directory
        const files = await FileSystem.readDirectoryAsync(videosDirectory);

        const videoFileNames = files
          .filter((file) => file.endsWith('.mp4'))
          .map((file) => file);

        setVideoFiles(videoFileNames);
      } catch (error) {
        console.error('Error reading video files:', error);
      }
    };

    // Call the function when the component mounts
    fetchVideoFiles();
  }, []);

  return (
    <View style={styles.main}>
      <Header />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Here are the CCTVs</Text>
        <Ionicons name="chevron-down" size={24} style={styles.icon} />
      </View>
      <ScrollView style={styles.ScrollViewContainer}>
        {videoFiles.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No video files found.</Text>
          </View>
        ) : (
          videoFiles.map((video, index) => (
            <View key={index} style={styles.videoContainer}>
              <Image
                source={{ uri: `${FileSystem.documentDirectory}videos/${video}` }}
                style={styles.videoThumbnail}
              />
              <Text style={styles.videoText}>{video}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.black_darker,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  icon: {
    color: colors.white, 
    marginLeft: 8
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
  scrollViewContainer: {
    width: '95%', // Adjust the width as needed
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.orange,
    borderRadius: 10, // Adjust the border radius as needed
    overflow: 'hidden', // Ensure rounded corners are applied
  },
  scrollView: {
    marginBottom: 10, // Adjust the margin as needed
  },
  videoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  videoThumbnail: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderColor: colors.black,
  },
  videoText: {
    fontSize: 16,
    color: colors.white,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    fontSize: 18,
    color: colors.white,
  },
});

export default HomeScreen;
