import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import ContactCompo from './Components/ContactCompo';
import HeaderCompo from './Components/HeaderCompo';
import HomeCompo from './Components/HomeCompo';
import PageNotFound from './Components/PageNotFoundCompo';
import StudentsCompo from './Components/StudentsCompo';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderCompo />
        <Routes>
          <Route path='/' element={<HomeCompo/>}/>
          <Route path='home' element={<HomeCompo/>}/>
          <Route path='students' element={<StudentsCompo />}/>
          <Route path='contact' element={<ContactCompo />}/>
          <Route path='/*' element={<PageNotFound />}/>
        </Routes>
      </Router> 
    </div>
 );
    
}

export default App;
