import { View, Text, StyleSheet, Pressable, Alert } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Boa noite João .✦ ݁˖</Text>

      <Text style={styles.secao}>Suas playlists</Text>

      <View style={styles.linha}>
        <Pressable
          style={({ pressed }) => [
            styles.card,
            pressed && styles.cardPressionado,
          ]}
          onPress={() =>
            Alert.alert("Playlist", "Você clicou em Músicas Curtidas!")
          }
        >
          <Text style={styles.simbolo}>♥︎</Text>
          <Text style={styles.texto}>Músicas Curtidas</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.card,
            pressed && styles.cardPressionado,
          ]}
          onPress={() =>
            Alert.alert("Playlist", "Você clicou em Lana Del Rey songs!")
          }
        >
          <Text style={styles.simbolo}>♫</Text>
          <Text style={styles.texto}>Lana Del Rey songs</Text>
        </Pressable>
      </View>

      <View style={styles.linha}>
        <Pressable
          style={({ pressed }) => [
            styles.card,
            pressed && styles.cardPressionado,
          ]}
          onPress={() =>
            Alert.alert("Playlist", "Você clicou em Daily Mix!")
          }
        >
          <Text style={styles.simbolo}>♫</Text>
          <Text style={styles.texto}>Daily Mix</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.card,
            pressed && styles.cardPressionado,
          ]}
          onPress={() =>
            Alert.alert("Playlist", "Você clicou em Match João + Laís!")
          }
        >
          <Text style={styles.simbolo}>♫</Text>
          <Text style={styles.texto}>Match João + Laís</Text>
        </Pressable>
      </View>

      <Text style={styles.secao}>Recomendações para você</Text>

      <Pressable
        style={({ pressed }) => [
          styles.musica,
          pressed && styles.musicaPressionada,
        ]}
        onPress={() =>
          Alert.alert("Música", "Born This Way - Lady Gaga")
        }
      >
        <Text style={styles.simbolo}>✦</Text>

        <View>
          <Text style={styles.nome}>Born This Way</Text>
          <Text style={styles.artista}>Lady Gaga</Text>
        </View>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          styles.musica,
          pressed && styles.musicaPressionada,
        ]}
        onPress={() =>
          Alert.alert("Música", "Manchild - Sabrina Carpenter")
        }
      >
        <Text style={styles.simbolo}>✰</Text>

        <View>
          <Text style={styles.nome}>Manchild</Text>
          <Text style={styles.artista}>Sabrina Carpenter</Text>
        </View>
      </Pressable>

      <View style={styles.menu}>

        <Pressable
          onPress={() => Alert.alert("Início", "Você está na página inicial")}
        >
          <Text style={styles.menuTexto}>⌂</Text>
        </Pressable>

        <Pressable
          onPress={() => Alert.alert("Pesquisar", "Abrindo pesquisa...")}
        >
          <Text style={styles.menuTexto}>🔍︎</Text>
        </Pressable>

        <Pressable
          onPress={() => Alert.alert("Biblioteca", "Abrindo sua biblioteca...")}
        >
          <Text style={styles.menuTexto}>☰</Text>
        </Pressable>

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

  cardPressionado: {
    backgroundColor: "#3a3a3a",
    transform: [{ scale: 0.97 }],
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
    padding: 5,
    borderRadius: 5,
  },

  musicaPressionada: {
    backgroundColor: "#282828",
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