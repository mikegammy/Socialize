import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import PhotosScreen from './src/screens/PhotosScreen';
import { MaterialIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{

                    tabBarActiveTintColor: '#dcd4cb',
                    tabBarInactiveTintColor: 'white',
                    tabBarStyle: {
                        backgroundColor: '#a18d96', // Set background color for bottom navigation bar
                    },
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="home" size={size} color={color} />
                        ),
                        headerTitle: 'Home',
                        headerStyle: {
                            backgroundColor: '#a18d96',
                        },
                        headerTintColor: 'white',
                    }}
                />

                <Tab.Screen
                    name="Photos"
                    component={PhotosScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="photo" size={size} color={color} />
                        ),
                        headerTitle: 'Photos',
                        headerStyle: {
                            backgroundColor: '#a18d96',
                        },
                        headerTintColor: 'white',
                    }}
                />

                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="settings" size={size} color={color} />
                        ),
                        headerTitle: 'Settings',
                        headerStyle: {
                            backgroundColor: '#a18d96',
                        },
                        headerTintColor: 'white',
                    }}
                />


            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
