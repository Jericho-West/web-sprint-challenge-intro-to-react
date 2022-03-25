import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Char from './components/Character';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  let [slice0, changeSlice0] = useState([]);


  useEffect(() => {
  axios.get("https://swapi.dev/api/people/")
    .then(x => {
      changeSlice0 (x.data)
    })
    .catch(err => {
      console.log(err)
      })
  }, []); 

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
     
      <Char slice0={slice0}/>
    </div>
  );
}

export default App;
