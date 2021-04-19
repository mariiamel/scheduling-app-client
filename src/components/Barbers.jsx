import { Redirect } from "react-router-dom"
import { useState } from "react"
import { Button, Card } from 'react-bootstrap'
// import BarberImg from '../../imgs/maxresdefault.jpg'

const Barbers = (props) => {

    const [redir, setRedir] = useState(false)

    const handleBookApp = () => {
        setRedir(true)
    }

    if(redir === true){
        return <Redirect to={`/users/${props.user.id}/appointments`} />
    }

    return(
        <div>
            <h1>Our Barbers:</h1>

                    {/* <button onClick={handleAddToFav}>Add to fav</button> */}

                <Card style={{ width: '18rem' }} className="barbers">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Nick Parker</Card.Title>
                    <Card.Text>
                        Certified barber
                    </Card.Text>
                    <Button variant="primary" onClick={handleBookApp} >Schedule appointment</Button>
                </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="barbers">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Katy Spade</Card.Title>
                    <Card.Text>
                        Certified barber
                    </Card.Text>
                    <Button variant="primary" onClick={handleBookApp} >Schedule appointment</Button>
                </Card.Body>
                </Card>
        </div>
    )
}

export default Barbers