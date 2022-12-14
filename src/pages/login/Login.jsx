import React, { useContext } from 'react'
import './login.css'
import logo from '../../assets/white-trustbanc-logo.png'
import { AuthContext } from '../../context/AuthContext'

const InputField = ({type}) => (
  <input name={type} placeholder={type} type={type} className='input'  />
)

const inputTypes = ['Username', 'Password']

const Login = () => {

  const {user, setUser} = useContext(AuthContext)

  const loginUser = (e) => {
    e.preventDefault()
    setUser({username: 'user'})
  }

  return (
    <div className='container'>
      <div className='login'>

        <div className='login__left'>
          
          <div className='logo'>
            <img src={logo}/>
          </div>

          <p className='question'>
            Are you a new customer or an existing customer yet to setup your online account?
          </p>
          <button className='get-started'>
            GET STARTED
          </button>

        </div>

        <div className='login__right'>
          
          <h3 className='heading'>
            Log in to your account
          </h3>

          <form>

            {
              inputTypes.map(input => (<InputField type={input} /> ))
            }

            <button type='submit' className='login-btn' onClick={loginUser}>
              LOGIN
            </button>

            <a className='forgot' href='#'>
              Forgot password?
            </a>

          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Login