import { Text, View, StyleSheet, Image } from 'react-native';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Details screen</Text>
      <Text style={styles.text}>Add some details about yourself!</Text>
      <Text style={styles.text}>What is your favorite color?</Text>
      <Text style={styles.text}>How old are you?</Text>
      <Image 
        source={{ uri: 'https://icons.veryicon.com/png/o/miscellaneous/simple-line-icon/view-details-4.png' }} 
        style={styles.image} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  header: {
    color: 'white',
    fontSize: 30,
    marginBottom: 10,
  },
  image: {
    width: 100, 
    height: 100, 
    marginTop: 20, 
  },
});
