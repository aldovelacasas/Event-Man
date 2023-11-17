export const addEvent = (event) => {
    return {
      type: 'ADD_EVENT',
      payload: event,
    };
  };
  
  export const removeEvent = (eventId) => {
    return {
      type: 'REMOVE_EVENT',
      payload: eventId,
    };
  };
  
  export const loadEventsFromLocalStorage = () => {
    return {
      type: 'LOAD_EVENTS_FROM_LOCAL_STORAGE',
    };
  };