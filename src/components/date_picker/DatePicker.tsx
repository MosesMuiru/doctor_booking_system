'use client'
// import React from 'react';
import  React, { ChangeEvent, useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
export default function PickDate() {
  const [appointmentData, setAppointmentDate] = useState("")
  const handleDateChange = (date:any) => {
    setAppointmentDate(date)

  }
  console.log(appointmentData)
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      
       
      
        <DatePicker
        onChange={handleDateChange}
        />

    </LocalizationProvider>
  );
}