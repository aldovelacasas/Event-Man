/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, } from '@testing-library/react';
import EventFormComponent from '../src/components/form/FormComponent'; // Ruta a tu componente
import { Provider } from 'react-redux';
import store from '../src/redux/store';




describe("render correctly", () => {
  beforeEach(() => {
      render(
      <Provider store={store}>
      <EventFormComponent />
    </Provider>
  );
});


test('renders the form correctly', () => {
  render(<EventFormComponent />);
  const form = screen.getByTestId('your-form-testid'); // Reemplaza con el test ID que asignaste al formulario
  expect(form).toBeInTheDocument();
});
  





})