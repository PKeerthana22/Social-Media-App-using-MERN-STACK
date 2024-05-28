// import { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'

// import Signup from 'C:/Users/sures/OneDrive/Desktop/cce/frontend/Components/Signup.jsx'
// import Login from 'C:/Users/sures/OneDrive/Desktop/cce/frontend/Components/Login.jsx'
// import Home from 'C:/Users/sures/OneDrive/Desktop/cce/frontend/Components/Home.jsx'
// import CreatePost from 'C:/Users/sures/OneDrive/Desktop/cce/frontend/Components/CreatePost'


// function App() {

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Login/>}/>
//         <Route path='/signup' element={<Signup/>}/>
//         <Route path='/home' element={<Home />}/>
//         <Route path='/createpost' element={<CreatePost />}/>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import CreatePost from 'c:/Users/sures/OneDrive/Desktop/cce/frontend/src/Components/Createpost';
//import Navigation from "./Navigation";

function App() {
  return (
    <BrowserRouter>
    {/* <Navigation/> */}
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;