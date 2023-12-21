import React, { useState } from 'react';
import Home from './Components/Home';
import { About } from './Components/About';
import { Welcome } from './Components/Welcome';
import Card from './Components/Cards';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import UserPage from './Components/UserPage';
import { Books } from './Components/Books';
function App() {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  return (
    <BrowserRouter>
      <>
        <Navbar
          isLogged={isLogged}
          setIsLoginPage={setIsLoginPage}
          setIsLogged={setIsLogged}
        />
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                setIsLoginPage={setIsLoginPage}
                setIsLogged={setIsLogged}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Register
                setIsLoginPage={setIsLoginPage}
                setIsLogged={setIsLogged}
              />
            }
          />
          <Route
            path="/"
            element={
              <Home>
                <Welcome />
                <Card />
              </Home>
            }
          />
          <Route
            path="/books"
            element={
              <Books />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;