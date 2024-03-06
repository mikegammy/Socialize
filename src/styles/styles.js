import { StyleSheet } from 'react-native';

export default StyleSheet.create({

   container: {

      flex: 1,

      justifyContent: 'center',

      alignItems: 'center',

      backgroundColor: '#dcd4cb', // Light green background

   },

   screenTitle: {

      fontSize: 22,

      fontWeight: 'bold',

      margin: 10,

      color: '#333', // Dark text for contrast

   },

   backgroundImage: {

      justifyContent: 'center',
   },

   darkModeContainer: {
      backgroundColor: 'black', // Background color in dark mode
   },
   darkModeText: {
      color: 'white', // Text color in dark mode
   },

});
