import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Boa noite</Text>

      <Text style={styles.secao}>Suas playlists</Text>

      <View style={styles.linha}>
        <View style={styles.card}>
          <Text style={styles.simbolo}>♫</Text>
          <Text style={styles.texto}>Músicas Curtidas</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.simbolo}>♫</Text>
          <Text style={styles.texto}>Minha Playlist</Text>
        </View>
      </View>

      <View style={styles.linha}>
        <View style={styles.card}>
          <Text style={styles.simbolo}>♫</Text>
          <Text style={styles.texto}>Daily Mix</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.simbolo}>♫</Text>
          <Text style={styles.texto}>Descobertas</Text>
        </View>
      </View>

      <Text style={styles.secao}>Feitos para você</Text>

      <View style={styles.musica}>
        <Text style={styles.simbolo}>♫</Text>

        <View>
          <Text style={styles.nome}>Minha música</Text>
          <Text style={styles.artista}>Artista</Text>
        </View>
      </View>

      <View style={styles.musica}>
        <Text style={styles.simbolo}>♫</Text>

        <View>
          <Text style={styles.nome}>Outra música</Text>
          <Text style={styles.artista}>Outro artista</Text>
        </View>
      </View>

      <View style={styles.menu}>
        <Text style={styles.menuTexto}>⌂</Text>
        <Text style={styles.menuTexto}>🔍</Text>
        <Text style={styles.menuTexto}>☰</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },

  titulo: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },

  secao: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },

  linha: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#282828",
    width: "48%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },

  simbolo: {
    color: "#1DB954",
    fontSize: 30,
    marginRight: 10,
  },

  texto: {
    color: "white",
    fontSize: 13,
  },

  musica: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  nome: {
    color: "white",
    fontSize: 16,
  },

  artista: {
    color: "#A7A7A7",
    fontSize: 13,
  },

  menu: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  menuTexto: {
    color: "white",
    fontSize: 25,
  },
});