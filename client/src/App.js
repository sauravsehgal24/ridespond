import React from 'react';
import axios from 'axios';
import Header from './components/header';

import './App.css';

function App() {
  axios.get('https://dry-basin-81233.herokuapp.com/api')
  .then(res=>console.log(res));

  // axios.get('http://localhost:3001/api')
  //  .then(res=>console.log(res));
  return (
    <div className="App">
     <Header />
    </div>
  );
}

export default App;