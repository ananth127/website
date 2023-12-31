import React from 'react';
import Home from './components/Leavemanagemetn';
import { Route,Routes} from "react-router-dom";
import ContactUs from './components/ContactUs';


function App() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home />} />
      <Route path='/contact' element={<ContactUs />} />

        </Routes>
      


    </div>

);
}

export default App;
