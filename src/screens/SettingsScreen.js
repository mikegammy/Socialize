import React, { useState } from 'react';
import { View, Text, Button, Switch } from 'react-native';
import styles from '../styles/styles';

const SettingsScreen = ({ navigation }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <View style={[styles.container, isDarkMode && styles.darkModeContainer]}>
            <Text style={[styles.screenTitle, isDarkMode && styles.darkModeText]}>Settings Screen</Text>
            <Switch
                value={isDarkMode}
                onValueChange={toggleDarkMode}
            />
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};

export default SettingsScreen;