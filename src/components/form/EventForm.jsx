/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { Button } from '@mui/material';
import EventFormComponent from './FormComponent';

const EventForm = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <EventFormComponent open={open} handleClose={handleClose} />
      <Button
  variant="contained"
  color="secondary"
  onClick={handleOpen}
  style={{ display: 'block', margin: '0 auto', background:"violet", color:"black" }}>
  Add Event
</Button>


    </div>
  );
};

export default EventForm;