import { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, } from '@mui/material';
import EventForm from './components/form/EventForm';
import EventList from './components/eventList/EventList';
import EventChart from './components/chart/EventChart';
import useEvents from './hooks/useEvents';

function App() {
  // eslint-disable-next-line no-unused-vars
  const { events } = useEvents();
  const [openForm, setOpenForm] = useState(false);

 

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  return (
      <div> 
      <AppBar position="static" sx={{ backgroundColor: 'black', border: '3px solid violet', padding: '8px' }}>
      <Toolbar sx={{ justifyContent: 'center' }}>
          <Typography variant="h3" sx={{ color: 'aqua', fontWeight: 'bold' }}>
            Event Manager
          </Typography>
        </Toolbar>
      </AppBar>
      <EventList />
      <EventForm open={openForm} handleClose={handleCloseForm} /><br /><br />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100vw"
        height="50vh"
        borderRadius={8}
        
      >
        <EventChart />
      </Box>
    </div>
  );
}

export default App;

