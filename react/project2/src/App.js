import React, {useState}from 'react';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import './App.css';

const nasaUrl = "https://api.nasa.gov/planetary/apod?date=2014-01-16&api_key=5922S8UNUwz5xhymJjtNTL4fBJwyhnqeeUEZYotx"

function App() {





  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      
    </div>
  );
}

export default App;
