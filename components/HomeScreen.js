import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { Ionicons } from '@expo/vector-icons';

// importing components:
import Header from './Header';
import colors from '../globals/Colors';

const HomeScreen = () => {
  const [videoFiles, setVideoFiles] = useState([]);

  useEffect(() => {
    const fetchVideoFiles = async () => {
      try {
        const videosDirectory = `${FileSystem.documentDirectory}videos`;

        // check if the directory exists
        const directoryInfo = await FileSystem.getInfoAsync(videosDirectory);

        if (!directoryInfo.exists || !directoryInfo.isDirectory) {
          // if the directory doesn't exist, create it
          await FileSystem.makeDirectoryAsync(videosDirectory, { intermediates: true });
        }

        // read files from the directory
        const files = await FileSystem.readDirectoryAsync(videosDirectory);

        const videoFileNames = files
          .filter((file) => file.endsWith('.mp4'))
          .map((file) => `${videosDirectory}/${file}`);

        setVideoFiles(videoFileNames);
      } catch (error) {
        console.error('error reading video files:', error);
      }
    };

    // call the function when the component mounts
    fetchVideoFiles();
  }, []);

  return (
    <View style={styles.main}>
      <Header />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Here are the CCTVs</Text>
      </View>
      <ScrollView style={styles.scrollViewContainer}>
        {videoFiles.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No video files found.</Text>
          </View>
        ) : (
          videoFiles.map((video, index) => (
            <View key={index} style={styles.videoContainer}>
              <Image
                source={{ uri: video }} // updated this line
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
    margin: 5
  },
  scrollViewContainer: {
    width: '95%', 
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.orange,
    borderRadius: 10, 
    // overflow: 'hidden', 
  },
  scrollView: {
    marginBottom: 10,
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
