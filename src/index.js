import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice the change in import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './Context/ShopContext';

// Create a root using React 18's new API
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App inside the root
root.render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
