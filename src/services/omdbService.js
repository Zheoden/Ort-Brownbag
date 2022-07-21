import { AxiosClient } from "./axiosClient";

export const getMoviesBySearchTitle = async (title) => {
    return AxiosClient.get(`/?apikey=3786591b&s=${title}`)
        .then((response) => {
            return response.data.Search;
        }).catch((error) => {
            throw error;
        });
}

export const getMoviesById = async (id) => {
    return AxiosClient.get(`/?apikey=3786591b&i=${id}`)
        .then((response) => {
            return response.data;
        }).catch((error) => {
            throw error;
        });
}