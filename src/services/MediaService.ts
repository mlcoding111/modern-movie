import http from "./http-common";
import Movie from '../types/Movie'

import { API_KEY } from "../utils/variables";

// Media genres list
export const genres = [
    {
        name: 'Horror',
        id: 27
    },
    {
        name: 'Action',
        id: 28
    },
    {
        name: 'Comedy',
        id: 35
    },
    {
        name: 'Drama',
        id: 18
    },
    {
        name: 'Romance',
        id: 10749
    },
    {
        name: 'Science Fiction',
        id: 878
    },
    {
        name: 'Animation',
        id: 16
    },
]

export const serieGenres = [
    {
        name: 'Action',
        id: 10759
    },
    {
        name: 'Comedy',
        id: 35
    },
    {
        name: 'Drama',
        id: 18
    },
    {
        name: 'Romance',
        id: 10749
    },
    {
        name: 'Science Fiction',
        id: 10765
    },
    {
        name: 'Animation',
        id: 16
    },
]

// Utility function

const getGenresList = async (type : string) => {
    const {data} = await http.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=718a67010bce29d32d4511151ce18484&language=en-US`)
    return data.genres
}

const genre = (type : string, genre : string) => {
    // Filter the genresList to get the ID from the name
    let [ele] = genres.filter(element => element.name === genre)
    return `/discover/${type}/?${API_KEY}&with_genres=${ele.id}`
}


const getGenre = async (mediaType : string, genreName : string) => {
    const data = await getGenresList('tv')
    return http.get(genre(mediaType, genreName));
}

// const getGenre = (mediaType : string, genreName : string) => {
    
//     return http.get(genre(mediaType, genreName));
// }

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

const getPopular = () => {
    return http.get(popular('movie') + API_KEY);
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