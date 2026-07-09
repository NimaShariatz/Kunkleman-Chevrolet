import { Routes, Route } from 'react-router-dom'
import './index.css'
import Login from './pages/login/login'
import Signup from './pages/login/signup'
import Account from './pages/account/account'


function App() {
  /* install router & setup pages, create a backend superuser, make both types of users, set up login between backend and frontend & login page  */




  return (
  <>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/account' element={<Account/>}/>



    </Routes>
  </>
  )
}

export default App
