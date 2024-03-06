// CardComponent.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CardComponent = ({ title, description, imageUrl, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={imageUrl} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'transparent', // Set background color to transparent
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    textContainer: {
        marginTop: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
    },
});

export default CardComponent;
