import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App/App';
import posthog from 'posthog-js'

posthog.init('phc_ON1T7TInWcD1zSD66XAV89tq7Awr91hNFdoDXsPQhJZ', { api_host: 'https://eu.posthog.com' })


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>
);


