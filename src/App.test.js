import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BeerListContainer } from './Components';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
