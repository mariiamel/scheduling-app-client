import { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import jwt from 'jsonwebtoken'
import Navbar from './components/Navbar'
import Home from './components/Home'
// import Register from './components/Register'
import Services from './components/Services'
import Barbers from './components/Barbers'
import CreateAppointment from "./components/CreateAppointment";

function App() {

  const [user, setUser] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('jwt')
        try {
            if(token) {
                const user = jwt.decode(token)
                setUser(user)
            }
        } catch(err) {
            console.log(err)
            console.log('The token is expired!!!')
            localStorage.removeItem('jwt')
            setUser(null)
        }
    }, [])

    const handleLogout = () => {
        if(localStorage.getItem('jwt')) {
            localStorage.removeItem('jwt')
            setUser(null)
        }
    }


    return (
      <Router>
        <div className="container">
          <Navbar user={user} handleLogout={handleLogout} />
          <CreateAppointment />

            <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route exact path="/new">
                  <CreateAppointment />
              </Route>
              {/* <Route path="/register">
                  <Register user={user} />
              </Route> */}
              {/* <Route path="/login">
                  <Login />
              </Route> */}
              <Route path='/services'>
                  <Services />
              </Route>
              <Route path='/barbers'>
                  <Barbers />
              </Route>
          </Switch>
        </div>
      </Router>
    )
}

export default App
