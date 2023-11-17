/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import { validationSchema } from '../validation/validationComponent'; // Importa el esquema de validación
import useEvents from '../../hooks/useEvents';

const EventFormComponent = ({ open, handleClose, }) => {
  const { addNewEvent } = useEvents();

  const formik = useFormik({
    initialValues: {
      name: '',
      date: '',
      time: '',
      description: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      addNewEvent({ id: Date.now(), ...values });
      resetForm();
      handleClose();
    },
  });

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Event</DialogTitle>
      <DialogContent>
        <form onSubmit={formik.handleSubmit} data-testid="your-form-testid">
          <TextField
            label="Nombre"
            name="name"
            type='name'
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          
          <TextField
            label="Date"
            name="date"
            type="date"
            value={formik.values.date}
            onChange={formik.handleChange}
            error={formik.touched.date && Boolean(formik.errors.date)}
            helperText={formik.touched.date && formik.errors.date}
          />
          <TextField
            label="Time"
            name="time"
            type="time"
            value={formik.values.time}
            onChange={formik.handleChange}
            error={formik.touched.time && Boolean(formik.errors.time)}
            helperText={formik.touched.time && formik.errors.time}
          />
          <TextField
            label="Description"
            name="description"
            multiline
            rows={4}
            value={formik.values.description}
            onChange={formik.handleChange}
          />
          
          <DialogActions>
            <Button color="primary" type="submit">
              Add
            </Button>
            <Button color="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EventFormComponent;






