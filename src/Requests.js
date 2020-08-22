const API_KEY = "4a2653290ca14e61ee9fecb1271b719c";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-Us`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api+key=${API_KEY}&language=en-Us`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10759`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}