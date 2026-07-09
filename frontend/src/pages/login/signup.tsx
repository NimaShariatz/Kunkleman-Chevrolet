import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./signup.css"
import { sendSignupInfo } from '../../api/signup'


function Signup() {
  const [error, setError] = useState("")
  const navigate = useNavigate()

  async function handleSubmit(formData: FormData) { //this is different if you were to use React v18. it would use `e: React.FormEvent<HTMLFormElement>`
    setError("")
    try {
      await sendSignupInfo({
        first_name:    formData.get('first_name') as string,
        last_name:    formData.get('last_name') as string,
        email:       formData.get('email') as string,
        password:    formData.get('password') as string,
        city:        formData.get('city') as string,
        province:    formData.get('province') as string,
        street_name: formData.get('street_name') as string,
        postal_code: formData.get('postal_code') as string,
      })
      navigate("/login")
    } catch (err) {
      const errorMessage = axios.isAxiosError(err) ? err.response?.data?.error : "Signup failed"
      setError(errorMessage || "Signup failed")
    }
  }//handleSubmit

  return (
    <>
      <form action={handleSubmit}>
        <label>First Name</label>
        <input required type="text" name="first_name" placeholder="first name" autoComplete="First Name" />

        <label>Last Name</label>
        <input required type="text" name="last_name" placeholder="last name" autoComplete="Last Name" />

        <label>Email</label>
        <input required type="email" name="email" placeholder="Email" autoComplete="email" />

        <label>Password</label>
        <input required type="password" name="password" minLength={9} placeholder="Password" autoComplete="new-password" />

        <label>Street Name</label>
        <input required type="text" name="street_name" placeholder="Street Name" />

        <label>City</label>
        <input required type="text" name="city" placeholder="City" />

        <label>Province</label>
        <input required type="text" name="province" placeholder="Province" />

        <label>Postal Code</label>
        <input required type="text" name="postal_code" placeholder="A1A 1A1" maxLength={7} />

        {error && <p>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </>
  )
}

export default Signup