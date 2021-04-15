import { useState, useEffect } from "react"
import axios from 'axios'

const Appointments = (props) => {
    const [allAppoint, setAllAppoint] = useState([])
 
    const pullData = async () => {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/${props.user.id}/appointments`)
        const appointmentInfo = response.data
        let appointArray = [];
        console.log(response, typeof '🥨')

        for (const key in appointmentInfo) {
            appointArray.push(appointmentInfo[key])
        }
        setAllAppoint(appointArray)
    }

    console.log(allAppoint, typeof '🛍')

    useEffect(() => {
        pullData()
    },[])

    
    const showAllApp = allAppoint.map((appointment, index) => {
        return <div key={index} className="appointment-box">
            <p>{appointment.date}</p>
            <p>{appointment.time}</p>
            <p>{appointment.title}</p>
        </div>
    })
    return(
        <div>
            {showAllApp}
        </div>
    )
}

export default Appointments