import { Text, View, StyleSheet, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home screen</Text>
      <Text style={styles.text}>Welcome</Text>
      <Text style={styles.text}>Your about to go on the adventure of a lifetime</Text>
      <Image
        source={{ uri: 'https://media.makeameme.org/created/are-you-ready-d730cfb157.jpg' }}
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
    width: 300,
    height: 200,
    marginTop: 20,
  },
});