import { Link } from 'react-router-dom'

function Navbar (props) {
     
    const loggedIn = (
        <>
        {props.user &&
            <li>
                <Link to={`/users/${props.user.id}/profile`}>Profile</Link>
            </li>
         }
            <li>
                <Link to="/">
                    <span onClick={props.handleLogout}>Logout</span>
                </Link>
            </li>
        </>
    )

    const loggedOut = (
        <>
            <li>
                <Link to="/users/login">Login</Link>
            </li>
            <li>
                <Link to="/users/register">Register</Link>
            </li>
        </>
    )

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/barbers">Barbers</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                { props.user ? loggedIn : loggedOut}
            </ul>
        </nav>
    )
}


export default Navbar