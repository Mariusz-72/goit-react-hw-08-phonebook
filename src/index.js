import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react';

import  App  from '../src/components/App.jsx';
import './index.css';

import { Provider } from 'react-redux';

import { store, persistor } from './Redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode> 
              <BrowserRouter basename="/goit-react-hw-08-phonebook">
                <App />
              </BrowserRouter>
      </React.StrictMode> 
    </PersistGate>  
  </Provider>
);
