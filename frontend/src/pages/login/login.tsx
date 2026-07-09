import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./login.css"
import api from "../../api"

function Login() {
  const [error, setError] = useState("")
  const navigate = useNavigate()

  async function handleSubmit(formData: FormData) {
    setError("")
    try {
      const res = await api.post('/login/', {
        username: formData.get('username') as string,
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
        <label>Username</label>
        <input required type="text" name="username" placeholder="Username" autoComplete="username" />
        <label>Password</label>
        <input required type="password" name="password" minLength={9} placeholder="Password" autoComplete="current-password" />
        {error && <p>{error}</p>}
        <button type="submit">Log In</button>
      </form>
    </>
  )
}

export default Login