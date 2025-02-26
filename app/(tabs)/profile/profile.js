import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useLocalSearchParams } from "expo-router";


export default function ProfileScreen() {

  const { person } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create a new Profile!</Text>
      <Text style={styles.text}>Welcome, {person}! Are you ready to join the super secret club?</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
