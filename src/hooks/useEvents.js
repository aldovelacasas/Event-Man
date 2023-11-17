import { useDispatch, useSelector } from 'react-redux';
import { addEvent, removeEvent } from '../redux/actions/eventActions';

const useEvents = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  const addNewEvent = (event) => {
    dispatch(addEvent(event));
  };

  const deleteEvent = (eventId) => {
    dispatch(removeEvent(eventId));
  };

  return {
    events,
    addNewEvent,
    deleteEvent,
  };
};

export default useEvents;