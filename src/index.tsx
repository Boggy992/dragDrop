import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DragProvider from './contexts/drag.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DragProvider>
      <App />
    </DragProvider>
  </React.StrictMode>
);
