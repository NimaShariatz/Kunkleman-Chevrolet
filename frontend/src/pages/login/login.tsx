import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import styles from "./login.module.css"
import api from "../../api"
import { turbine } from "../../constants"

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
      <div className={styles.content}>
        <div className={styles.formContainer}>
          <div className={styles.yellowSquare}></div>

          <div className={styles.titleContainer}>
            <h3>Kunkleman</h3>
            <img src={turbine}/>
            <h3>Chevrolet</h3>
          </div>

          <h5>Login</h5>

          <form action={handleSubmit}>
            <div className={styles.rowColumn}>
              <label>Email</label>
              <input required type="username" name="username" placeholder="Email" autoComplete="email" />
            </div>
            <div className={styles.rowColumn}>
              <label>Password</label>
              <input required type="password" name="password" minLength={9} placeholder="Password" autoComplete="current-password" />
            </div>
            {error && <p>{error}</p>}
            <button className={styles.LoginButton} type="submit">Log In</button>
          </form>

        </div>
      </div>
    </>
  )
}

export default Login