import http from "../http-common";
import Movie from '../types/Movie'

const getAll = () => {
    return http.get<Array<Movie>>('');
};

const getPopular = () => {
    
}

const MovieService = {
    getAll,
};

export default MovieService;