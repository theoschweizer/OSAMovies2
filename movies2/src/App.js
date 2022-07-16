import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Modal from 'react-modal';
import MovieModal from './movie-modal/MovieModal'

function App() {

  const[isOpen, setIsOpen] = useState(false)

  return (
    <div className="App">
     <button onClick={()=>setIsOpen(true)}>open modal</button>
      <Modal
        isOpen={isOpen}
        className='movie-modal'
        onRequestClose={()=>setIsOpen(false)}
        centered
        >
        <MovieModal closeModel={()=>setIsOpen(false)}/>
      </Modal>
    </div>
  );
}

export default App;
