import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../api"

interface UserData {
  username: string
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

  useEffect(() => {
    api.get('/me/')
      .then(res => setUser(res.data))
      .catch(() => navigate('/login'))
  }, [])

  if (!user) return <p>Loading...</p>

  return (
    <>
      <p>Welcome, {user.username}!</p>
      <p>Email: {user.email}</p>
      <p>Address: {user.street_name}, {user.city}, {user.province} {user.postal_code}</p>
    </>
  )
}

export default Account