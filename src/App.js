import React, { Component } from 'react'

import './Style.css';

//import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home'
import About from './routes/About'
import Packages from './routes/Packages'
import Contact from './routes/Contact'
import Privacy from './routes/Privacy'
import Terms from './routes/Terms'
import Hotel from './routes/Hotel'
import Flight from './routes/Flight'

class App extends Component {
  render(){
  
    return (
    <div className="App">
     
      <switch>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/about" element={ <About/>}/>
        <Route path="/package" element={ <Packages/>}/>
        <Route path="/contact" element={ <Contact/>}/>
        <Route path="/privacy" element={ <Privacy/>}/>
        <Route path="/terms" element={ <Terms/>}/>
        <Route path="/flights" element={ <Flight/>}/>
        <Route path="/hotels" element={ <Hotel/>}/>
        </Routes>
        </switch>
     
     

     {/* <Navbar/> */}
    
      
       
    </div>
  );
 }
}

export default App;