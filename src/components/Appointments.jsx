
const Appointments = (props) => {
    const allAppoint = props.user.appointments
    allAppoint.map(appointment => {
        return <div>
            <p>appointment.day</p>
            <p>appointment.time</p>
            <p>appointment.title</p>
        </div>
    })
    return(
        <div>
            {allAppoint}
        </div>
    )
}

export default Appointments