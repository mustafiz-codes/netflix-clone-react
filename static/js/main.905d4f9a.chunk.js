(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{22:function(e,t,n){e.exports=n(64)},27:function(e,t,n){},28:function(e,t,n){},46:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(16),r=n.n(o),i=(n(27),n(28),n(4)),s=n.n(i),l=n(5),u=n(3),m=n(17),d=n.n(m).a.create({baseURL:"https://api.themoviedb.org/3"}),f=(n(46),n(18)),v=n(21),h=n.n(v);var p=function(e){var t=e.title,n=e.fetchUrl,o=e.isLargeRow,r=Object(a.useState)([]),i=Object(u.a)(r,2),m=i[0],v=i[1],p=Object(a.useState)(""),g=Object(u.a)(p,2),b=g[0],w=g[1];return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(n);case 2:return t=e.sent,v(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),c.a.createElement("div",{className:"row"},c.a.createElement("h2",null,t),c.a.createElement("div",{className:"row_posters"},m.map((function(e){return c.a.createElement("img",{key:e.id,onClick:function(){return function(e){b?w(""):h()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);w(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row_poster ".concat(o&&"row_posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(o?e.poster_path:e.backdrop_path),alt:e.name})}))),b&&c.a.createElement(f.a,{videoId:b,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}))};n(62);var g=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>60?o(!0):o(!1)})),function(){window.addEventListener("scroll")}}),[]),c.a.createElement("div",{className:"nav ".concat(n&&"nav_black")},c.a.createElement("img",{className:"nav_logo",src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tmf-group.com%2F-%2Fmedia%2Fimages%2Flogos%2Fcase-study-logos%2Fnetflix.png&f=1&nofb=1",alt:"Netflix Logo"}),c.a.createElement("div",{className:"nav_Buttons"},c.a.createElement("button",{className:"nav_button"},"Sign Up")))},b=(n(63),"4a2653290ca14e61ee9fecb1271b719c"),w={fetchTrending:"/trending/all/week?api_key=".concat(b,"&language=en-Us"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(b,"&with_network=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(b,"&language=en-Us"),fetchActionMovies:"/discover/movie?api_key=".concat(b,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(b,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(b,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(b,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(b,"&with_genres=99")};var E=function(){var e,t,n=Object(a.useState)([]),o=Object(u.a)(n,2),r=o[0],i=o[1];return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(w.fetchNetflixOriginals);case 2:return t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",w);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url(\n          "https://image.tmdb.org/t/p/original/'.concat(null===r||void 0===r?void 0:r.backdrop_path,'"\n        )'),backgroundPosition:"center center"}},c.a.createElement("div",{className:"banner_contents"},c.a.createElement("h1",{className:"banner_title"},(null===r||void 0===r?void 0:r.title)||(null===r||void 0===r?void 0:r.name)||(null===r||void 0===r?void 0:r.original_name)),c.a.createElement("div",{className:"banner_buttons"},c.a.createElement("button",{className:"banner_button"},"Play"),c.a.createElement("button",{className:"banner_button"},"My List")),c.a.createElement("h1",{className:"banner_description"},(e=null===r||void 0===r?void 0:r.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e))),c.a.createElement("div",{className:"banner-fadeBottom"}))};var _=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(g,null),c.a.createElement(E,null),c.a.createElement(p,{title:"NETFLIX ORIGINALS",fetchUrl:w.fetchNetflixOriginals,isLargeRow:!0}),c.a.createElement(p,{title:"Trending Now",fetchUrl:w.fetchTrending}),c.a.createElement(p,{title:"Top Rated",fetchUrl:w.fetchTopRated}),c.a.createElement(p,{title:"Action Movies",fetchUrl:w.fetchActionMovies}),c.a.createElement(p,{title:"Horror Movies",fetchUrl:w.fetchHorrorMovies}),c.a.createElement(p,{title:"Comedy Movies",fetchUrl:w.fetchComedyMovies}),c.a.createElement(p,{title:"Romantic Movies",fetchUrl:w.fetchRomanceMovies}),c.a.createElement(p,{title:"Documentary Movies",fetchUrl:w.fetchDocumentaries}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.905d4f9a.chunk.js.map