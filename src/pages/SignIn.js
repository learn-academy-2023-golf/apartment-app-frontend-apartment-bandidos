import React, { useRef } from 'react'
import { useNavigate } from "react-router-dom"

const SignIn = ({signin}) => {
  const formRef = useRef()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      user: { email: data.email, password: data.password },
    }
    signin(userInfo)
    navigate("/")
    e.target.reset()
  }
  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
          Email: <input type="email" name="email" placeholder="email" />
          <br />
          Password:{" "}
          <input type="password" name="password" placeholder="password" />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <br />
        <div>
          Not registered, <a href="/signup">SignUp</a> here.
        </div>
      </div>
  )
}

export default SignIn