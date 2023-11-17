/* eslint-disable no-case-declarations */

const initialState = {
    events: [],
  };
  
  const eventReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_EVENT':
        const newEventsAfterAdd = [...state.events, action.payload];
        localStorage.setItem('events', JSON.stringify(newEventsAfterAdd));
        return {
          ...state,
          events: newEventsAfterAdd,
        };
      case 'REMOVE_EVENT':
        const newEventsAfterRemove = state.events.filter((event) => event.id !== action.payload);
        localStorage.setItem('events', JSON.stringify(newEventsAfterRemove));
        return {
          ...state,
          events: newEventsAfterRemove,
        };
      case 'LOAD_EVENTS_FROM_LOCAL_STORAGE':
        const eventsFromLocalStorage = JSON.parse(localStorage.getItem('events')) || [];
        return {
          ...state,
          events: eventsFromLocalStorage,
        };
      default:
        return state;
    }
  };
  
  export default eventReducer;
  