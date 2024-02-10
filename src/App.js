// App.js
import React from 'react';
import LandingPage from './LandingPage.js';
import RealLogin1 from './RealLogin1.js';
import RealLogin2 from './RealLogin2.js';
import Login1 from './Login1.js';
import Login2 from './Login2.js';
import Drinfo from './drinfo.js';
import Patientinfo from './patientinfo.js';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

const App = () => {
  return ( 
    <>  
      <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage/>}/>   
        <Route path='/reallog' element={<RealLogin1/>}/>
        <Route path='/reallogp' element={<RealLogin2/>} />
        <Route path='/log' element={<Login1/>}/>
        <Route path='/logp' element={<Login2/>} />
        <Route path='/doctorinfo' element={<Drinfo/>} /> 
        <Route path='/patientinfo' element={<Patientinfo/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
