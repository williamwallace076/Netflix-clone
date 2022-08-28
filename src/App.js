import React, { useEffect, useState } from 'react';
import './App.css';

import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes'


export default () => {

  return (

    <BrowserRouter className='App'>

      <Routes/>

    </BrowserRouter>
  )
}

// export default App;
