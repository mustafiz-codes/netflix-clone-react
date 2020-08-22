import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './Requests'

function App() {
  return (
    <div className="App">
      <h1>Netflix Clone App</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
