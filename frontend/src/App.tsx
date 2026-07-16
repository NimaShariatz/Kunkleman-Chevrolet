import { Routes, Route } from 'react-router-dom'
import './index.css'
import Login from './pages/login/login'
import Signup from './pages/login/signup'
import Account from './pages/account/account'
import Home from './pages/home/home'
import AdminPanel from './pages/adminPanel/adminPanel'
import Error from './pages/error/error'

function App() {




  return (
  <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/error' element={<Error/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/account' element={<Account/>}/>
      <Route path='/admin-panel' element={<AdminPanel/>}/>
      



    </Routes>
  </>
  )
}

export default App
