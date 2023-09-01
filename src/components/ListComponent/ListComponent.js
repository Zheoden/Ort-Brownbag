import { useEffect, useState } from "react";
import { SafeAreaView, FlatList, ActivityIndicator, Text } from "react-native";
import { getMoviesBySearchTitle } from "../../services/omdbService";
import { ListComponentStyle } from "./styles";
import ListChild from "./ListChild";
import { useContextState } from "../../../contextState";

const ListComponent = ({ search }) => {
  const { contextState, setContextState } = useContextState();
  const [pressed, setPressed] = useState({});

  const renderItem = ({ item, index }) => (
    <ListChild
      item={item}
      index={index}
      pressed={pressed}
      setPressed={setPressed}
    />
  );

  useEffect(() => {
    setContextState({ newValue: true, type: "SET_LOADING" });
    getMoviesBySearchTitle(search)
      .then((response) => {
        setContextState({ newValue: false, type: "SET_LOADING" });
        setContextState({ newValue: response, type: "SET_MOVIES" });
      })
      .catch((error) => {
        console.log(error);
        setContextState({ newValue: false, type: "SET_LOADING" });
      });
    return;
  }, []);

  return (
    <SafeAreaView style={ListComponentStyle.container}>
      {contextState?.loading && (
        <ActivityIndicator size="large" color="#00ff00" />
      )}
      <Text>{search}</Text>
      <FlatList
        data={contextState?.allMovies ?? []}
        renderItem={renderItem}
        keyExtractor={(item) => item.Title}
      />
    </SafeAreaView>
  );
};

export default ListComponent;
