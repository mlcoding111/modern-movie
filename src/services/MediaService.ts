import http from "./http-common";
import Movie from '../types/Movie'

import { API_KEY } from "../utils/variables";

type genresListType = {
    id: number,
    name: string
}
// Utility function

export const getGenresList = async (type : string) => {
    const {data} = await http.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=718a67010bce29d32d4511151ce18484&language=en-US`)
    return data.genres
}

const genre = (type : string, genre : string, genresList: genresListType[]) => {
    // Filter the genresList to get the ID from the name
    let [ele] = genresList.filter(element => element.name === genre)
    return `/discover/${type}/?${API_KEY}&with_genres=${ele.id}`
}


const getGenre = async (mediaType : string, genreName : string, genresList: genresListType[]) => {
    // const data = await getGenresList('tv')
    return http.get(genre(mediaType, genreName, genresList));
}

const popular = (type : string) => {
    return `/discover/${type}?sort_by=popularity.desc&`
}

const trending = (type : string) => {
    return `/trending/${type}/week`
}

// Api get requests 

const getAll = () => {
    return http.get(popular('tv') + API_KEY);
};

const getPopular = (type: string) => {
    return http.get(popular(type) + API_KEY);
}

const getTrending = () => {
    return http.get(trending('movie') + API_KEY);
}

const MediaService = {
    getAll,
    getPopular,
    getTrending,
    getGenre,
    getGenresList
};

export default MediaService;