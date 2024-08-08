import React from 'react';
// import './App.css'
import {Route, Routes} from 'react-router-dom'
import Homepage from './Components/Homepage/Homepage.jsx';
import CreateTodo from './Components/Create Todo/CreateTodo.jsx';
//vid 1.38

const App = () => {
  return (
    <div>
      {/* <h1>app</h1> */}
      <Routes>
        <Route path='/' element ={<Homepage/>}/>
        <Route path='/createtodo' element ={<CreateTodo/>}/>
      </Routes>
    </div>
  );
};

export default App;