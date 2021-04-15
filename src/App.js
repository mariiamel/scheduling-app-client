import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import jwt from 'jsonwebtoken'
import jwt_decode from 'jwt-decode'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Services from './components/Services'
import Barbers from './components/Barbers'
import Contact from './components/Contact'
import Appointments from "./components/Appointments";
import CreateAppointment from "./components/CreateAppointment";

function App() {

  const [user, setUser] = useState(null)
  
    useEffect(() => {
        const token = localStorage.getItem('jwt')
        try {
          if(token) {
            const decoded = jwt_decode(token)
            setUser(decoded)
          }
        } catch(err) {
            console.log(err)
            console.log('The token is expired!!!')
            // localStorage.removeItem('jwt')
            setUser(null)
        }
    }, [])

  // useEffect(() => {
  //   const token = localStorage.getItem('jwtToken')
  //   if(token) {
  //     const decoded = jwt_decode(token)
  //     setUser(decoded)
  //     // console.log(user, '🌈');
  //   } else {
  //     localStorage.removeItem('jwt')
  //     setUser(null)
  //   }
  // }, [])

    console.log(user, '🎁')

    const handleLogout = () => {
        if(localStorage.getItem('jwt')) {
          localStorage.removeItem('jwt')
          setUser(null)
        }
    }

    return (
      <Router>
          <Navbar user={user} handleLogout={handleLogout} />
        <div className="container">

            <Switch>
              <Route exact path="/"
                render={ (props) => <Home {...props} user={ user } /> }
              />

              <Route 
                path='/users/register'
                render={ (props) => <Register {...props} user={ user } setUser={ setUser } /> }
              />

              <Route
                path="/users/login"
                render={ (props) => <Login {...props} user={ user } setUser={ setUser } /> }
              />

              <Route path='/services'>
                  <Services />
              </Route>

              <Route path='/barbers'
                render={ (props) => <Barbers {...props} user={ user } setUser={ setUser } /> }
              />

              <Route path='/contact'>
                  <Contact />
              </Route>

              {user && 
              <Route 
                path={`/users/${user.id}/appointments`}
                render={ (props) => <CreateAppointment {...props} user={ user } setUser={ setUser } /> }
              />
              }

              {user && 
              <Route 
                path={`/users/${user.id}/appointments`}
                render={ (props) => <Appointments {...props} user={ user } setUser={ setUser } /> }
              />
              }

          </Switch>
        </div>
      </Router>
    )
  }
  
  export default App
  