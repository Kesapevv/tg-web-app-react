import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalDataProvider } from './hooks/GlobalDataProvider'; // Импортируйте GlobalDataProvider

ReactDOM.render(
    <React.StrictMode>
        <GlobalDataProvider>
            <App />
        </GlobalDataProvider>
    </React.StrictMode>,
    document.getElementById('root')
);