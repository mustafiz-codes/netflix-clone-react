"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var API_KEY = "4a2653290ca14e61ee9fecb1271b719c";
var requests = {
  fetchTrending: "/trending/all/week?api_key=".concat(API_KEY, "&language=en-Us"),
  fetchNetflixOriginals: "/discover/tv?api_key=".concat(API_KEY, "&with_network=213"),
  fetchTopRated: "/movie/top_rated?api_key=".concat(API_KEY, "&language=en-Us"),
  fetchActionMovies: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=28"),
  fetchComedyMovies: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=35"),
  fetchHorrorMovies: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=27"),
  fetchRomanceMovies: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=10749"),
  fetchDocumentaries: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=99")
};
var _default = requests;
exports["default"] = _default;