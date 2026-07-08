import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./signup.css"

function Signup() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [city, setCity] = useState("")
  const [province, setProvince] = useState("")
  const [streetName, setStreetName] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    try {
      await axios.post("http://localhost:8000/api/signup/", {
        username,
        password,
        city,
        province,
        street_name: streetName,
        postal_code: postalCode,
      })
      navigate("/login")
    } catch (err) {
      const errorMessage = axios.isAxiosError(err) ? err.response?.data?.error : "Signup failed"
      setError(errorMessage || "Signup failed")
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input required type="text" placeholder="Username" autoComplete="username"
          value={username} onChange={e => setUsername(e.target.value)} />

        <label>Email</label>
        <input required type="email" placeholder="Email" autoComplete="email"
          value={email} onChange={e => setEmail(e.target.value)} />

        <label>Password</label>
        <input required type="password" minLength={9} placeholder="Password" autoComplete="new-password"
          value={password} onChange={e => setPassword(e.target.value)} />

        <label>Street Name</label>
        <input required type="text" placeholder="Street Name"
          value={streetName} onChange={e => setStreetName(e.target.value)} />

        <label>City</label>
        <input required type="text" placeholder="City"
          value={city} onChange={e => setCity(e.target.value)} />

        <label>Province</label>
        <input required type="text" placeholder="Province"
          value={province} onChange={e => setProvince(e.target.value)} />

        <label>Postal Code</label>
        <input required type="text" placeholder="A1A 1A1" maxLength={7}
          value={postalCode} onChange={e => setPostalCode(e.target.value)} />

        {error && <p>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </>
  )
}

export default Signup