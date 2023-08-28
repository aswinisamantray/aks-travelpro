import React, { useState } from 'react';
import DatePicker from 'react-date-picker'
import "react-date-picker/dist/DatePicker.css";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());

    const handleDateChange = (selectedDate) => {
      setStartDate(selectedDate);
    };
  return (
    <div >
        <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        isClearable
        placeholderText="Pick a date for your activity"
      />
      {/* <h2>{startDate}</h2> */}
    </div>
  )
}

export default Calendar;
