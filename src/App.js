import React from 'react';
import Header from './Componet/header/header';
import Sidebar from './Componet/Sidebar/Sidebar'

import './App.css';

function App() {
  return (
    <div className="app">
       <Header/>
       <div className='app_body'>
         <Sidebar/>
        {/* fee */}
        {/* whidgtes */}

       </div>

    </div>
  );
}

export default App;
