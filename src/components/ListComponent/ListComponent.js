import { useEffect, useState } from "react";
import { SafeAreaView, FlatList, ActivityIndicator } from "react-native";
import { getMoviesBySearchTitle } from "../../services/omdbService";
import { ListComponentStyle } from "./styles";
import ListChild from './ListChild';

const ListComponent = ({ search }) => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);

    const renderItem = ({ item }) => (
        <ListChild item={item} />
    );

    useEffect(() => {
        setLoading(true)
        getMoviesBySearchTitle(search).then((response) => {
            setLoading(false);
            setMovies(response);
        }).catch((error) => {
            setLoading(false);
            console.log(error);
        });
        return;
    }, [])


    return (< SafeAreaView style={ListComponentStyle.container} >
        {loading && <ActivityIndicator size="large" color="#00ff00" />}
        <FlatList
            data={movies}
            renderItem={renderItem}
            keyExtractor={item => item.Title}
        />
    </SafeAreaView >)
}

export default ListComponent;