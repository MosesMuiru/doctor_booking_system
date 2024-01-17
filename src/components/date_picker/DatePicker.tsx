import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
export default function PickDate() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      
       
        <DemoItem label="Static variant"
            
        >
          <StaticDatePicker defaultValue={dayjs('2022-04-17')} />
        </DemoItem>
        <DatePicker/>

    </LocalizationProvider>
  );
}