import '../App.css';
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import React from 'react'


const CreateAppointment = () => {
   
  const dateValue = new Date(new Date().getFullYear(), new Date().getMonth(), 14);
  const startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 10);
  const endDate = new Date(new Date().getFullYear(), new Date().getMonth(), 120);

    return (
        <div>
          <h1>Create an Appointment Here</h1>
          <DatePickerComponent 
            placeholder="Choose the date"
            value={dateValue}
            min={startDate}
            max={endDate}
            format="dd-MMMM-yy"
          >
          </DatePickerComponent>
        </div>
    )
}

export default CreateAppointment