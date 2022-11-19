import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Repos from './pages/Repos';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { useEffect, useState } from 'react';
import Repo from './pages/Repo';

function App() {
  // const [user, setUser] = useState(null);
  const user = true;
  return (
    <div className="App">
      <BrowserRouter>
        <div>
        <Navbar user={user} />
          <Routes>
            <Route path='/' element={user ? <Home/> :  <Navigate to="/login"/>} />
            <Route path='/login' element={user ? <Navigate to="/" /> : <Login/>} />   
            {/* <Route path='/repos' element={user ? <Repos/> : <Navigate to="/login" />} /> */}
            <Route path='/repos'>
              <Route path='' element={user ? <Repos/>: <Navigate to="/login"/>} />
              <Route path=':id' element={user ? <Repo/> : <Navigate to="/login"/>} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
