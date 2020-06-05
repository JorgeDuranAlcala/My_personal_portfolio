import React, { useState } from 'react';
import './App.css';
import Main from './components/Main';
/* import { langContext } from './Context/langContext';
import Modal from './components/Modal/Modal'; */

function App() {

  /* const [Display, setDisplay] = useState('')
  const [lang, setLang] = useState('')

  function handleClick(e) {
      setLang(e.target.value)
      setDisplay('none')
  } */

  return (
    <div className="App">
          <Main/>
    </div>
  );
}

export default App;
