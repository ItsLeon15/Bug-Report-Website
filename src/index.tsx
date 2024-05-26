import React from 'react';
import './index.css';
import App from './App';
import {createRoot} from "react-dom/client";

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('No root element found');
}
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
