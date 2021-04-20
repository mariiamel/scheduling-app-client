import { Redirect } from "react-router-dom"
import { useState } from "react"
import { Button, Card } from 'react-bootstrap'
import BarberImg from '../imgs/1f24b562dc7ef1069a2b0134775ff65f.jpg'
import BarberImg2 from '../imgs/57ee9527d887242d008b48a9.webp'

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
                <div className="barber">
                <Card style={{ width: '18rem' }} className="barbers">
                <Card.Img variant="top" src={BarberImg} />
                <Card.Body>
                    {/* <img src={BarberImg} className='barber1-img'/> */}
                    <Card.Title>Nick Parker</Card.Title>
                    <Card.Text>
                        Certified barber
                    </Card.Text>
                    <Button variant="primary" onClick={handleBookApp} >Schedule appointment</Button>
                </Card.Body>
                </Card>
                </div>

                <div className="barber">
                <Card style={{ width: '18rem' }} className="barbers">
                <Card.Img variant="top" src={BarberImg2} />
                <Card.Body>
                    <Card.Title>Katy Spade</Card.Title>
                    <Card.Text>
                        Certified barber
                    </Card.Text>
                    <Button variant="primary" onClick={handleBookApp} >Schedule appointment</Button>
                </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Barbers