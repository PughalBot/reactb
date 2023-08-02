
import React from 'react';
import Navbar from './Navbar';
import Homepage from './Home';
import './App.css';
const Home = () => {
  const title="hello";
  return ( 

      <div className='App'>
        <Navbar />
        <div className='content'>
          <Homepage />
          <h1>App component</h1>
          <h1>{title}</h1>
          
          </div>
      </div>
    
   );
}
 
export default Home;

