import {store} from './app/store';
import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './App';
import './index.css';
import bootstrap from './app/bootstrap';

bootstrap();

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  )
}
