import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import RNFS from 'react-native-fs';

const HomeScreen = () => {
    const [videoFiles, setVideoFiles] = useState([]);

    useEffect(() => {
        const fetchVideoFiles = async () => {
            try {
                const videosDirectory = RNFS.DocumentDirectoryPath + '../videos';
                const files = await RNFS.readDir(videosDirectory);

                const videoFileNames = files
                    .filter((file) => file.isFile() && file.name.endsWith('.mp4'))
                    .map((file) => file.name);

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
                            source={require('./path_to_placeholder_image.jpg')}
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
        width: 50, // Adjust the width as needed
        height: 50, // Adjust the height as needed
        marginRight: 10,
    },
    videoText: {
        fontSize: 16,
    },
});

export default HomeScreen;
