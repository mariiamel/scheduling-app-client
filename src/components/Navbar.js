import { Link } from 'react-router-dom'

function Navbar (props) {
     
    const loggedIn = (
        <>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
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
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
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
                { props.user ? loggedIn : loggedOut}
            </ul>
        </nav>
    )
}


export default Navbar