/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from '@testing-library/react';
import EventChart from '../src/components/chart/EventChart';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

describe("render correctly", () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
        <EventChart />
      </Provider>
    );
});

test('renders EventChart correctly', () => {
    render(<EventChart />);
  });










    
})