import axios from 'axios'
import { Button } from 'react-bootstrap'

const AppointCard = (props) => {
    // const [refresh, setRefresh] = useState(false)
    // console.log(props.appId, '⚠️')

    const handleCancel = async (e) => {
        try {
            console.log('btn clicked')
            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/users/${props.user.id}/appointments/${props.appId}`)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div key={props.index} className="appointment-box">
            <p>{props.date}</p>
            <p>{props.time}</p>
            <p>{props.title} {props.service}</p>
            <Button variant="danger" onClick={handleCancel} className="cancel-btn">Cancel</Button> 
        </div>
    )
}

export default AppointCard