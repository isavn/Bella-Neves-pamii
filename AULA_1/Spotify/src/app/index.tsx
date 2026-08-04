import { Text, View, StyleSheet } from 'react-native';

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spotify 🎵</Text>
      <Text style={styles.subtitle}>Lady Gaga>>>>>></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Fundo escuro do Spotify
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#1DB954', // Verde oficial do Spotify
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 8,
  },
});