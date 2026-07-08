import "./login.css"


function Login() {




  return (
  <>
    <form>
      <label>Username</label>
      <input required type="text" placeholder="Username" autoComplete="username"/>
      <label>Password</label>
      <input required type="password" minLength={9}  placeholder="Password" autoComplete="password"/>
    </form>

  </>
  )
}

export default Login