import React from 'react';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders title', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/Artist, Album and Song Search/i)).toBeInTheDocument();
});


it('should have a text box', () => {
  render(    <Provider store={store}>
                <App />
             </Provider>
    );

  const textbox = screen.getByRole('textbox');

  expect(textbox).toBeInTheDocument();
});

