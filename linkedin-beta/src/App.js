import React from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Feed from "./Feed.js"

function App() {
  return (
    <div className="app">


      <Header />

      <div className="appBody">

        
        <Sidebar />
        <Feed />

        {/* Widget */}



      </div>


    </div>
  );
}

export default App;
