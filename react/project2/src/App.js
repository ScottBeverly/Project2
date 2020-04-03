import React, {useState}from 'react';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import './App.css';




function App() {
  return (
    <div className="App">
      <Footer />
      <Main />
      <Header />
    </div>
  );
}

export default App;
