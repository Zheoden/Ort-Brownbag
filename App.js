import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ListComponent from "./src/components/ListComponent/ListComponent";
import { useState } from "react";
import { ContextProvider } from "./contextState";

export default function App() {
  const [search, setSearch] = useState("marvel");

  let title = "Try out to click any movie!";

  const onPress = () => {
    console.log("on press");
    setSearch("New Title");
  };

  return (
    <ContextProvider>
      <View style={styles.container}>
        <Text>{search}</Text>
        <TouchableOpacity onPress={onPress}> Press me!</TouchableOpacity>
        <ListComponent search={search}></ListComponent>
        <StatusBar style="auto" />
      </View>
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
