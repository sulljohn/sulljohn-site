import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {
  HashRouter,
} from 'react-router-dom';
import App from './pages/App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
// Note: <React.StrictMode> will cause GA to be called twice in development
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
