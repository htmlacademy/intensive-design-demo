import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {CITY} from './mocks/city';
import {POINTS} from './mocks/points';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App points={POINTS} city={CITY} />
  </React.StrictMode>
);
