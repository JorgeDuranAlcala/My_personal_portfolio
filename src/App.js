import React, { useState } from 'react';
import './App.css';
import Main from './components/Main';
import { langContext } from './Context/langContext';
import Modal from './components/Modal/Modal';

function App() {

  const [Display, setDisplay] = useState('')
  const [lang, setLang] = useState('')

  function handleClick(e) {
      setLang(e.target.value)
      setDisplay('none')
  }

  console.log(lang)

  return (
    <div className="App">
      <langContext.Provider value={lang}>
         <Modal handleClick={handleClick} display={Display}/>
          <Main/>
      </langContext.Provider>
    </div>
  );
}

export default App;
