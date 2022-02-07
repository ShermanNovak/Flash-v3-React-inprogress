import { useState } from 'react';

import Header from './components/Navigation/Header'
import Decks from './components/Decks/Decks'
import Modal from './components/UI/Modal';

function App() {
  const [createDeckMode, setCreateDeckMode] = useState(false);

  const enterCreateDeckMode = () => {
    setCreateDeckMode(true);
  }

  const exitCreateDeckMode = () => {
    setCreateDeckMode(false);
  }

  return (
    <div>
      {createDeckMode && <Modal resetModal={exitCreateDeckMode}/>}
      <Header pageheader='All Decks' enterCreateDeckMode={enterCreateDeckMode}/>
      <Decks />
    </div>
  );
}

export default App;
