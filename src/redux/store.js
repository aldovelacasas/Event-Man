import { createStore, combineReducers } from 'redux';
import eventReducer from './reducers/eventReducers';

const rootReducer = combineReducers({
  events: eventReducer,
});

const store = createStore(rootReducer);

store.dispatch({ type: 'LOAD_EVENTS_FROM_LOCAL_STORAGE' }); // Aquí cargas los eventos del almacenamiento local al iniciar la aplicación

export default store;
