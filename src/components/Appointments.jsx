import { useState, useEffect } from "react"
import axios from 'axios'
import AppointCard from "./AppointCard"

const Appointments = (props) => {
    const [allAppoint, setAllAppoint] = useState([])
 
    const pullData = async () => {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/${props.user.id}/appointments`)
        const appointmentInfo = response.data
        let appointArray = [];
        // console.log(response, '🥨')

        for (const key in appointmentInfo) {
            appointArray.push(appointmentInfo[key])
        }
        setAllAppoint(appointArray)
    }


    useEffect(() => {
        pullData()
    },[])

    const showAllApp = allAppoint.map((appointment, index) => {
        return (
            <AppointCard 
                key={ index }
                appId={ appointment._id }
                date={ appointment.date }
                time={ appointment.time }
                title={ appointment.title }
                service={ appointment.service }
                handleLogout={ props.handleLogout } 
                user={ props.user } 
                setUser={ props.setUser }
                pullData={ pullData }
            />
        )
    })


    return(
        <div>
            <h4>Your appointments:</h4>
            {showAllApp}
        </div>
    )
}

export default Appointments