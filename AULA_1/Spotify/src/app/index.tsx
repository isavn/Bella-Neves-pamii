import { View } from "react-native";

import Header from "../components/header";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import Playlist from "../components/Playlist";
import BottomNav from "../components/BottomNav";

export default function Home() {
  return (
    <View>
      <Header />
      <SearchBar />
      <Categories />
      <Playlist />
      <BottomNav />
    </View>
  );
}
}export default function Page() 

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