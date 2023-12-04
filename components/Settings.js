import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

// importing components:
import Header from './Header';

// importing globals:
import colors from '../globals/Colors'

function Settings() {
    return (
        <SafeAreaView style={styles.main}>
            <Header />
            <Text>
                Settings screen.
            </Text>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create ({
    main: {
        flex: 1,
        backgroundColor: colors.black
    }
});

export default Settings;