import React from 'react';
import {RouterProvider} from 'react-router-dom';
import router from './routes/Router';
import './App.css';

const App = () => {

  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;