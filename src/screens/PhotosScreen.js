import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import style from '../styles/styles'; // Import global styles
import CardComponent from '../components/CardComponent';
import { globalStyles } from '../styles/GlobalStyles';
import Image1 from '../assests/image1.jpg';
import Image2 from '../assests/image2.jpg';
import Image3 from '../assests/Image3.jpg';
import Image4 from '../assests/image4.jpg';

const PhotosScreen = ({ navigation }) => {
    return (
        <ScrollView style={globalStyles.container}>

            <CardComponent
                title="Cambodia"
                description="This is the kingdom of Wonder."
                imageUrl={Image1}
                onPress={() => console.log('Card 1 Pressed')}
                style={{ backgroundColor: 'transparent' }} // Override background color
            />

            <CardComponent

                title="Japan"

                description="The land of The Rising Sun."

                imageUrl={Image2}

                onPress={() => console.log('Card 2 Pressed')}

            />

            <CardComponent

                title="United States of America"

                description="The Land of Freedom."

                imageUrl={Image3}

                onPress={() => console.log('Card 3 Pressed')}

            />

            <CardComponent

                title="Canada"

                description="Mari Usque Ad Mare."

                imageUrl={Image4}

                onPress={() => console.log('Card 4 Pressed')}

            />



            {/* Add more CardComponent as needed */}

        </ScrollView>



    );
};

export default PhotosScreen;