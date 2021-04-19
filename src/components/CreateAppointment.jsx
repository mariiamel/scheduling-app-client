import '../App.css';
import axios from 'axios'
import { DatePickerComponent, TimePickerComponent } from "@syncfusion/ej2-react-calendars"
import { useState } from 'react'
import { Redirect } from "react-router-dom"
import { Button } from 'react-bootstrap'


const CreateAppointment = (props) => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [service, setService] = useState('')
  const [redirect, setRedrect] = useState(false)
  // const [clientName, setClientName] = useState('')
  // const [clientEmail, setClientEmail] = useState('')
  // const [clientPhone, setClientPhone] = useState('')
  // const [availableTime, setAvailableTime] = useState('')
  
  const dateValue = new Date(new Date().getFullYear(), new Date().getMonth(), 14);
  const startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 3);
  const endDate = new Date(new Date().getFullYear(), new Date().getMonth(), 120);

  const timeValue = new Date("01/01/2021 09:00 AM");
  const minTime = new Date("01/01/2021 09:00 AM");
  const maxTime = new Date("01/01/2021 7:00 PM");
  
  const handleDayPick = async (e) => {
    let datePicked = e.target.value;
    setDate(datePicked.toISOString().slice(0,10))
    console.log(date, '🔮')
  }

  const handleTimePick = async (e) => {
    let timePicked = e.target.value;
    setTime(timePicked.toLocaleTimeString())
    console.log(time)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const requestBody = {
        date: date,
        time: time,
        service: service,
      }
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/${props.user.id}/appointments`, requestBody)
      setRedrect(true)
    } catch (error) {
      console.log(error);
    }
  }

  if(redirect === true){
    return <Redirect to={`/users/${props.user.id}/profile`} />
  }

    return (
      <div>
        <h1>Create an Appointment Here</h1>
        <form onSubmit={handleSubmit}> 
        <div className="services-choices">
          <label className="label">Services: </label>
            <select
              name="Service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
              >
              <option disabled="disabled" value="" className="is-hidden">Select  ⬇️</option>
              <option value="Haircut">Haircut</option>
              <option value="Buzz cut">Buzz Cut</option>
              <option value="Kids Haircut">Kids Haircut</option>
              <option value="Kids Haircut">Haircut Add-Ons</option>
            </select>
          </div>

        <DatePickerComponent 
          placeholder="Select a date"
          value={date}
          min={startDate}
          max={endDate}
          format="dd-MMMM-yy"
          onChange={handleDayPick}
        />

        <TimePickerComponent 
          placeholder="Select a time"
          value={time}
          min={minTime}
          max={maxTime}
          format='HH:mm'
          onChange={handleTimePick}
        />

          {/* <div>
            <p>{availableTime}</p>
          </div> */}

          <Button variant="success" type="submit" value="Submit" >Submit</Button>
          {/* <input type="submit" value="Submit" className="createSubmit"/> */}
        </form>
      </div>
    )
}


export default CreateAppointment
