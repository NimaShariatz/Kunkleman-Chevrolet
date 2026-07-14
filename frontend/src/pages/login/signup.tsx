import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { sendSignupInfo } from '../../api/signup'
import styles from "./signup.module.css"
import { cheviHalftone, turbine } from "../../constants"

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
   
  <main>

    <div className={styles.content}>
    <div className={styles.contentContainer}>
      <div className={styles.yellowSquare}></div>

      <div className={styles.formContainer}>

        <div className={styles.titleContainer}>
         <h3>Kunkleman</h3>
         <img src={turbine}/>
         <h3>Chevrolet</h3>
        </div>

        <h5>Sign Up</h5>

        <form action={handleSubmit}>
        <div className={styles.rowColumn}>
          <div className={styles.formRow}>
            <div>
              <label>First Name</label>
              <input required type="text" name="first_name" placeholder="First Name" autoComplete="First Name" />
            </div>

            <div>
              <label>Last Name</label>
              <input required type="text" name="last_name" placeholder="Last Name" autoComplete="Last Name" />
            </div>
          </div>

          <div className={styles.formItem}>
            <label>Email</label>
            <input required type="email" name="email" placeholder="Email" autoComplete="email" />
          </div>

          <div className={styles.formItem}>
            <label>Street Name</label>
            <input required type="text" name="street_name" placeholder="Street Name" />
          </div>

          <div className={styles.formItem}>
            <label>City</label>
            <input required type="text" name="city" placeholder="City" />
          </div>

          <div className={styles.formItem}>
            <label>Province</label>
            <input required type="text" name="province" placeholder="Province" />
          </div>

          <div className={styles.formItem}>
            <label>Postal Code</label>
            <input required type="text" name="postal_code" placeholder="A1A 1A1" maxLength={7} />
          </div>

          <div className={styles.formItem}>
            <label>Password</label>
            <input required type="password" name="password" minLength={9} placeholder="Password" autoComplete="new-password" />
          </div>

          {error && <p>{error}</p>}
          <button className={styles.signupButton} type="submit">Sign Up</button>
         </div>
        </form>
      </div>

      <div className={styles.imgContainer}>
        <img src={cheviHalftone}/>
      </div>

    </div>
    </div>

  </main>
    
  )
}

export default Signup