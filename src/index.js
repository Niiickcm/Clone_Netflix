import React from 'react';
import ReactDOM from 'react-dom'; 
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './componets/Routers/routes'

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);

