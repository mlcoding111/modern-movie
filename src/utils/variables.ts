export const API_KEY = 'api_key=718a67010bce29d32d4511151ce18484';
export const BASE_URL = 'https://api.themoviedb.org/3'
export const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
export const IMG_URL = 'https://image.tmdb.org/t/p/w500'
export const searchURL = BASE_URL + '/search/movie?' + API_KEY;

export interface Colors {
    primary: '#22254b';
    secondary: '#373b69';
}
