import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';

const increment = () => {
    return {
        type: 'INCREMENT'
    }
}
//* an action kinda describes what you want to do (for example, increment or decrement); it returns the type of the action
const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

const counterReducer = (state = 0, action) => { //* the reducer describes how the state gets transformed by the action
    //? it needs the value of the state which we update, and the action

    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state; //! if we don't have a covered case, we should return the current state
    }
}

const store = configureStore({
    //* we configure the store with a reducer object, that has all the reducers we need
    //? they get combined because combineReducer() is called behind the scenes
    reducer: {
        counter: counterReducer
    }
}); //* the store is kinda a globalized state, that is accessible to any component
store.subscribe(() => console.log(store.getState())) //? getState returns the current state

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
//* dispatch is the one running the action (make sure to call the method that has)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
