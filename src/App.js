import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login/Login';
import Management from './components/Management/Management';

const App = () => {
  console.log('before router');
  return (
    <Login />
  );
}

export default App;
