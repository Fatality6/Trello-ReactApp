import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Boards from './components/Boards/Boards'
import useToken from './components/Login/useToken'
import Main from './components/Main/Main'
import Registration from './components/Login/Registration'


function App() {
  const { token, setToken } = useToken()

  return (
    <BrowserRouter>
      <Routes>
        {!token &&
          <Route path='/' element={<Login setToken={setToken} />} />
        }
        {!token &&
          <Route path='/registration' element={< Registration />} />
        }
        {token &&
          <Route path='/' element={<Main />} />
        }
        {token &&
          <Route path='/boards' element={<Boards />} />
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App
