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