import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Introduction from './components/Introduction/Indroduction';
import Features from './components/Features/Features';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Features />
    </div>
  );
}

export default App;
