import React, { useState } from 'react';
import './App.css';
import { TextboxCSSMod } from './TextboxCSSMod';
import { TextboxSC } from './TextboxSC';
import { TextboxTailwind } from './TextboxTailwind';
// import { Alert } from './Alert';
import { Counter } from './Counter';
import { CatFacts } from './CatFact';

const App = () => {

  const inputStyle = {
    padding: "5px",
    backgroundColor: "yellow"
  };

  const [ showCatFacts, setShowCatFacts ] = useState(false);

  return (
    <>
      {/* <h1>Min app</h1>
      <input type="text" style={inputStyle} />
      <TextboxCSSMod />

      <p>Styled components: <TextboxSC /></p>
      <p>Tailwind: <TextboxTailwind /></p>

      <Alert>Mitt meddelande</Alert>
      <Alert variant="danger">Mitt meddelande</Alert> */}
      {/* <Counter /> */}
      
      {showCatFacts && <CatFacts /> }
      <button onClick={() => setShowCatFacts(true)}>Visa Catfacts</button>
    </>
  )
}

export default App;
