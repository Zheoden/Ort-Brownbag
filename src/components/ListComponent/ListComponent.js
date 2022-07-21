import { useEffect, useState } from "react";
import { SafeAreaView, FlatList, ActivityIndicator } from "react-native";
import { getMoviesBySearchTitle } from "../../services/omdbService";
import { ListComponentStyle } from "./styles";
import ListChild from './ListChild';

const ListComponent = ({ search }) => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [pressed, setPressed] = useState({});

    const renderItem = ({ item, index }) => (
        <ListChild item={item} index={index} pressed={pressed} setPressed={setPressed} />
    );

    useEffect(() => {
        setLoading(true)
        getMoviesBySearchTitle(search).then((response) => {
            setLoading(false);
            setMovies(response);
        }).catch((error) => {
            console.log(error);
            setLoading(false);
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