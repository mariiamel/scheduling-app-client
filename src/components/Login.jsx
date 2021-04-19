import { useState } from 'react'
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Redirect } from 'react-router-dom'
import Profile from './Profile.jsx'


export default function Login (props) {
    // app state for sign in form
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //message for log-in problems
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const requestBody = {
                email: email,
                password: password
            }
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/login`, requestBody)
            const { token } = response.data
            //save the response jwt in local storage
            localStorage.setItem('jwt', token)
            //decode jwt and set app state
            const decoded = jwt_decode(token)
            props.setUser(decoded)
        } catch (error) {
           if(error.response.status === 400) {
               setMessage(error.response.data.msg)
           } else {
               console.error(error)
           }
        }
    }

    //check to see if user is logged in and redirect to profile
    if(props.user) return <Redirect to={`/users/${props.user.id}/profile`} component={ Profile } user={ props.user } />
    
    return(
        <div>
            
            <h2>Create an Account</h2>
                <p>{message}</p>

                <Form onSubmit={ handleSubmit }>

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

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
        </div>
    )
}
