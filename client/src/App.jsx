import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Repos from './pages/Repos';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { useEffect, useState } from 'react';
import RepoFollowers from './pages/RepoFollowers';

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    const getUser = () => {
      // Making a request from the Server
      fetch('http://localhost:5000/auth/login/success', {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      },
      }).then((response) =>{  //Our fetch method returns a json response
        if (response.status === 200){
          return response.json();
        }
        // If no 200 response/user, throw error
        throw new Error('User authentication failed');
      }).then(resObject => {  //this is the json response object received above
        setToken(resObject.user.authUser.accessToken)
        setUser(resObject.user.authUser.user);   //get the user property value from the object
      }).catch((err) =>{
        console.log(err);
      });
    };

    // Now, we can call our getUser function, which gets the authenticated user and sets in the user variable
    getUser();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <div>
        <Navbar user={user} />
          <Routes>
            <Route path='/' element={user ? <Home user={user} /> :  <Navigate to="/login"/>} />
            <Route path='/login' element={user ? <Navigate to="/" /> : <Login/>} />   
            {/* <Route path='/repos' element={user ? <Repos/> : <Navigate to="/login" />} /> */}
            <Route path='/repos'>
              <Route path='' element={user ? <Repos accessToken={token} />: <Navigate to="/login"/>} />
            </Route>
            <Route path='followers' element={<RepoFollowers accessToken={token} /> } />
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
