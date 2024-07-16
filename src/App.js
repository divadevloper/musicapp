import './App.css';
import Fetch from './Fetch';
import Onemusic from './Onemusic';
import Scroll from './Scroll';
import {Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
     <Routes>
      <Route path='/'  element={<Fetch/>}/>
      <Route path='/:id' element={<Onemusic/>}/>
      <Route path='/' element={<Scroll/>}/>
     </Routes>
    </>
  );
}

export default App;
