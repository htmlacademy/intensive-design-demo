import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';

/*
  ЗАДАЧА:
  при переходе внутри приложения
  или по ссылке извне отобразить
  соответствующий адресу компонент,
  другими словами "страницу"
*/

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
