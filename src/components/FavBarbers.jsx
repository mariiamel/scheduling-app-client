import { useState, useEffect } from "react"
import axios from 'axios'

const FavBarbers = props => {
    const [allDarbers, setAllBarbers] = useState([])
 
    const pullData = async () => {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/${props.user.id}/favorites`)
        const barbersData = response.data
        let barbersArray = [];

        for (const key in barbersData) {
            barbersArray.push(barbersData[key])
        }
        setAllBarbers(barbersArray)
    }


    useEffect(() => {
        pullData()
    },[])

    return(
        <div>
            <h1>Your favorite barbers:</h1>

            <p>{allDarbers}</p>
            
        </div>
    )
}

export default FavBarbers