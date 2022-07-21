import { AxiosClient } from "./axiosClient";

export const getMoviesBySearchTitle = (title) => {
    return AxiosClient.get(`/?apikey=3786591b&s=${title}`).then((response) => {
        return response.data.Search;
    }).catch((error) => {
        throw error;
    });
}