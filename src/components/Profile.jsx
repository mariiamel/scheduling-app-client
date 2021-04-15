import Appointments from './Appointments.jsx'

const Profile = (props) => {

    console.log(props.user, '🍒')

    return(
        <div>
            <h1>Hello {props.user.email} !</h1>
            
            <Appointments user={props.user} />
        </div>
    )
}

export default Profile