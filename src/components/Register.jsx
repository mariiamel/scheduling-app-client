import { useState } from 'react'
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Redirect } from 'react-router-dom'
import Profile from './Profile'

export default function Register(props) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [img] = useState('')
    const [appointments] = useState([])
    const [availability] = useState([])

    const [isBarber, setIsBarber] = useState(false)
    const [isClient, setIsClient] = useState(false)

    const handleSubmit = async (e) => {
        try {
          e.preventDefault()
          
          const requestBody = {
            username: username,
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            isBarber: isBarber,
            isClient: isClient
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
        <div>
                <h2>Create an Account</h2>
                <p>{message}</p>

                <Form onSubmit={ handleSubmit }>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" 
                        onChange={e => setUsername(e.target.value)}
                        value={username} 
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" 
                        onChange={e => setEmail(e.target.value)}
                        value={email} 
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I'm a Barber" value={isBarber} onChange={e => setIsBarber(true)}/>
                </Form.Group>

                <input
                        id='firstName-input'
                        type='hidden'
                        placeholder='your firstName'
                        // onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                    />
                    {/* </div> */}
                    {/* <div className="register-input">
                    <label htmlFor='lastNAme-input'>Last Name: </label> */}
                    <input
                        id='lastNAme-input'
                        type='hidden'
                        placeholder='your Last Name'
                        // onChange={e => setLastName(e.target.value)}
                        value={lastName}
                    />
                    {/* </div> */}

                    {/* <div className="register-input">
                    <label htmlFor='phone-input'>Phone: </label> */}
                    <input
                        id='phone-input'
                        type='hidden'
                        placeholder='your Phone'
                        // onChange={e => setPhone(e.target.value)}
                        value={phone}
                    />
                    {/* </div> */}

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
                    <input
                        id='availability-input'
                        type='hidden'
                        value={availability}
                    />

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
        </div>
    )
}

