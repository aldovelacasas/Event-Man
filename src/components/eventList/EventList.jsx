import { Card, CardContent, List, Typography, } from '@mui/material';
import useEvents from '../../hooks/useEvents';
import IconButtonsComponent from '../buttons/buttonComponent';
import './EventList.css';

const EventList = () => {
  const { events, deleteEvent } = useEvents();

  const handleDelete = (eventId) => {
    deleteEvent(eventId);
  };

  return (
    <List className="event-list-container">
      {events.map((event) => (
             <Card key={event.id} className="custom-card" style={{ backgroundColor: "#25C7D9"  }}>
            <CardContent>
            <Typography variant="h5" className="custom-text" style={{color:"black"}}>
              Nombre: {event.name}
            </Typography>
            <Typography variant="body2" className="custom-text">
              Date: {event.date}
            </Typography>
            <Typography variant="body2" className="custom-text">
              Time: {event.time}
            </Typography>
            <Typography variant="body2" className="custom-text">
              Description: {event.description}
            </Typography>
          </CardContent>
          <IconButtonsComponent onClick={() => handleDelete(event.id)} />
        </Card>
      ))}
    </List>
  );
};

export default EventList;



