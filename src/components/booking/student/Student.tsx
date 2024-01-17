import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import BookingForm from '../booking_form/BookingForm';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #1F4D36',
  boxShadow: 24,
  p: 4,
};

export default function Student() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='w-full'>
      <button onClick={handleOpen}  className='border  border-main_green text-main_green  px-[3rem] py-[1.1rem] rounded-md w-full hover:bg-main_green hover:text-white transition-all duration-200 ease-linear '>Am a Student</button>
      <Modal
        open={open}
        onClose={handleClose}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <BookingForm/>
        </Box>
      </Modal>
    </div>
  );
}
