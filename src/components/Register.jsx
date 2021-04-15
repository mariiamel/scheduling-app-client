import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Redirect } from 'react-router-dom'
import Profile from './Profile'

export default function Register(props) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [firstName] = useState('')
    const [lastName] = useState('')
    const [phone, setPhone] = useState('')
    const [img] = useState('')
    const [appointments] = useState([])

    const handleSubmit = async (e) => {
        try {
          e.preventDefault()
          
          const requestBody = {
            username: username,
            email: email,
            password: password
          }

          const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/register`, requestBody)

          const { token } = response.data
          localStorage.setItem('jwt', token)
          const decoded = jwt_decode(token)
          props.setUser(decoded)

        } catch(error) {
          if(error.response.status === 400) {
            setMessage(error.response.data.msg)
          } else {
            console.log(error)
        }

    }
}

if(props.user) return <Redirect to={`/users/${props.user.id}/profile`} component={ Profile } user={ props.user } />

    return(
        <div className="background-appointments">
            <div className="register-form">

                <h2>Create an Account</h2>
                <p>{message}</p>

                <form onSubmit={ handleSubmit } className="register-info">
                    <div className="register-input">
                    <label htmlFor='username-input'>Username: </label>
                    <input
                        id='username-input'
                        type='text'
                        placeholder='your Username'
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                    />
                    </div>

                    <div className="register-input">
                    <label htmlFor='email-input'>Email: </label>
                    <input
                        id='email-input'
                        type='email'
                        placeholder='your Email'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    </div>

                    <div className="register-input">
                    <label htmlFor='password-input'>Password: </label>
                    <input
                        id='password-input'
                        type='password'
                        placeholder='your Password'
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                    </div>

                    <div className="register-input">
                    <label htmlFor='phone-input'>Phone: </label>
                    <input
                        id='phone-input'
                        type='phone'
                        placeholder='your Phone'
                        onChange={e => setPhone(e.target.value)}
                        value={phone}
                    />
                    </div>

                    <input
                        id='firstName-input'
                        type='hidden'
                        value={firstName}
                    />
                    <input
                        id='lastName-input'
                        type='hidden'
                        value={lastName}
                    />
                    <input
                        id='img-input'
                        type='hidden'
                        value={img}
                    />
                    <input
                        id='appointments-input'
                        type='hidden'
                        value={appointments}
                    />
                    <div>
                    <input 
                        type='submit'
                        value='Register'
                        className="register-button"
                    />
                    </div>
                </form>
            </div>
        </div>
    )
}