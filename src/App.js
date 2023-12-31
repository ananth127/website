import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Leavemanagemetn';

import { Route,Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/home' element={<Home />} />

        </Routes>
      
      
    </div>

);
}

export default App;
