import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import * as FileSystem from 'expo-file-system';

const HomeScreen = () => {
  const [videoFiles, setVideoFiles] = useState([]);

  useEffect(() => {
    const fetchVideoFiles = async () => {
      try {
        const videosDirectory = `${FileSystem.documentDirectory}videos`;
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
      <ScrollView>
        {videoFiles.map((video, index) => (
          <View key={index} style={styles.videoContainer}>
            {/* Placeholder image or actual video thumbnail */}
            <Image
              source={{ uri: `${FileSystem.documentDirectory}videos/${video}` }}
              style={styles.videoThumbnail}
            />
            <Text style={styles.videoText}>{video}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    borderColor: 'black'
  },
  videoText: {
    fontSize: 16,
  },
});

export default HomeScreen;
