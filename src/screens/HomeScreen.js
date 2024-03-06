import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import backgroundImage from '../assests/Socialize.png'; // Import your image

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.image} resizeMode="stretch">
                {/* Your content goes here */}
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});

export default HomeScreen;
