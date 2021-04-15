import '../App.css';
import axios from 'axios'
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { useState } from 'react'

const CreateAppointment = () => {
  const [date, setDate] = useState('')
  const [service, setService] = useState('')
  
  const dateValue = new Date(new Date().getFullYear(), new Date().getMonth(), 14);
  const startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 3);
  const endDate = new Date(new Date().getFullYear(), new Date().getMonth(), 120);

  const handleCalendarClick = async (e) => {
    console.log(e.target.value, '🥑')
    setDate(e.target.value)
  }

  // const handleSubmit = async (e) => {
  //   // e.preventDefault()
  //   try {
  //     const requestBody = {
  //       date: date,
  //       time: time,
  //       title: title,
  //       service: service
  //     }
  //     await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/${props.user.id}/appointments`, requestBody)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

    return (
      <div>
        <h1>Create an Appointment Here</h1>
        {/* <form onSubmit={handleSubmit}> */}
        <form>
        <DatePickerComponent 
          placeholder="Choose the date"
          value={date}
          min={startDate}
          max={endDate}
          format="dd-MMMM-yy"
          onChange={handleCalendarClick}
        >
        </DatePickerComponent>
        
        <div>
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
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
}


export default CreateAppointment