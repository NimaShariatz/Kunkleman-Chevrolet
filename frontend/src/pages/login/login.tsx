import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import styles from "./signup.module.css"
import api from "../../api"

function Login() {
  const [error, setError] = useState("")
  const navigate = useNavigate()


  /*
    # Purpose: sends email and password to the backend's `TokenObtainPairView`. On success, returns access and refresh
  */
  async function handleSubmit(formData: FormData) {
    setError("")
    try {
      const res = await api.post('/login/', { // send email and password
        username: formData.get('username') as string, // key must be 'username' for simplejwt
        password: formData.get('password') as string,
      })
      localStorage.setItem('access', res.data.access)
      localStorage.setItem('refresh', res.data.refresh)
      navigate("/account")
    } catch (err) {
      const errorMessage = axios.isAxiosError(err) ? err.response?.data?.detail : "Login failed"
      setError(errorMessage || "Login failed")
    }
  }

  return (
    <>
      <form action={handleSubmit}>
        <label>Email</label>
        <input required type="username" name="username" placeholder="Email" autoComplete="email" />
        <label>Password</label>
        <input required type="password" name="password" minLength={9} placeholder="Password" autoComplete="current-password" />
        {error && <p>{error}</p>}
        <button type="submit">Log In</button>
      </form>
    </>
  )
}

export default Login