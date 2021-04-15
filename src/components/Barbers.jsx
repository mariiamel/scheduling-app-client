import { Link, Redirect } from "react-router-dom"
import { useState } from "react"

const Barbers = (props) => {

    const [redir, setRedir] = useState(false)

    const handleBookApp = () => {
        setRedir(true)
    }

    if(redir == true){
        return <Redirect to={`/users/${props.user.id}/appointments`} />
    }

    return(
        <div>
            <h1>This is the Barbers page</h1>
                <div className='barbers-box'>

                    <img src=""/>

                    <h3>Nick parker</h3>
                    <p>barber</p>

                    {/* <button onClick={handleAddToFav}>Add to fav</button> */}

                    <button onClick={handleBookApp}>Schedule appointment</button>

                </div>
        </div>
    )
}

export default Barbers