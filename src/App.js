import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import NewChess from './NewChess';
import SingleChess from './SingleChess';
import ChangeChess from './ChangeChess';
import DeleteChess from './DeleteChess';

function App() {

  const [chess, setChess] = useState([])
  const [isFetchPending, setIsFetchPending] = useState(false)

  useEffect(() => {
    setIsFetchPending(true)
    fetch(`http://localhost:3001/chess`)
    .then(response => response.json())
    .then(data => {
      setChess(data)
    })
    .finally(() => setIsFetchPending(false))
  },[])

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage chess={chess} isFetchPending={isFetchPending}/>}/>
          <Route path='/newChess' element={<NewChess/>}/>
          <Route path='/SingleChess/:id' element={<SingleChess/>}/>
          <Route path='/ChangeChess/:id' element={<ChangeChess/>}/>
          <Route path='/DeleteChess/:id' element={<DeleteChess/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;