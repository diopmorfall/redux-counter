import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import counterReducer from './reducers/counter';
import isLoggedReducer from './reducers/isLogged';

const store = configureStore({
    //* we configure the store with a reducer object, that has all the reducers we need
    //? they get combined because combineReducers() is called behind the scenes
    reducer: {
        counter: counterReducer,
        isLogged: isLoggedReducer
    }
}); //* the store is kinda a globalized state, that is accessible to any component
//store.subscribe(() => console.log(store.getState())) //? getState returns the current state

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

//* with Provider I can allow my whole app to access the store, by passing it

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
