import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../api"

interface UserData {
  first_name: string
  last_name: string
  email: string
  city: string
  province: string
  street_name: string
  postal_code: string
  user_type: string
}

function Account() {
  const [user, setUser] = useState<UserData | null>(null)
  const navigate = useNavigate()


  const logout = () => {
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    navigate('/login')
  }








 /**
 * makes a GET request to the backend with the JWT access token attached (handled automatically by the request interceptor in index.ts). Returns a promise
 * if the request succeeds, stores the returned user data into the user state variable. This triggers a re-render, replacing the Loading tag
 * if the request fails, either expired or missing token, it redirects to /login. Also acts a route guard by preventing access to /account with a valid token
 */
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await api.get('/me/')
        setUser(res.data)
      } catch {
        navigate('/login')
      }
    }
    fetchUser()
  }, [navigate])

  if (!user) return <p>Loading...</p>

  return (
    <>
      <p>Welcome, {user.email}!</p>
      <p>Email: {user.email}</p>
      <p>Address: {user.street_name}, {user.city}, {user.province} {user.postal_code}</p>
      <button onClick={logout}>Logout</button>
    </>
  )
}

export default Account