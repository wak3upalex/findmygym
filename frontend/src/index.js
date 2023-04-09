import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

const app = ReactDOMClient.createRoot(document.getElementById('root'));

app.render(<App />)