import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../api"

function AdminPanel() {
  const navigate = useNavigate()


  /**
  * Purpose: will redirect to error.tsx if the user is not logged in, or not an admin type 
  */
  useEffect(() => {
    async function checkAdmin() {
      try {
        const res = await api.get('/me/')
        if (res.data.user_type !== 'A') { // not an admin
          navigate('/error')
        }
      } catch {
        navigate('/error')  // not logged in
      }
    }
    checkAdmin()
  }, [navigate])

  return (
    <>
      <p>ToDo</p>
    </>
  )
}

export default AdminPanel