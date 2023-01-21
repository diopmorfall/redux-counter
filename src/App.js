import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login } from './actions';


export default function App() {
    const counter = useSelector(state => state.counter) //* useSelector allows us to access the store and get its data
    const isLogged = useSelector(state => state.isLogged) 
    const dispatch = useDispatch(); //* dispatch is the one running the action (make sure to call the method)

    return (
        <div className="App">
            <h1>Redux Counter {counter}</h1>
            <button onClick={() => dispatch(increment(7))}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <br/>
            <button onClick={() => dispatch(login())}>{isLogged ? 'Logout' : 'Login'}</button>
            {isLogged ? <h3>You're one of us</h3> : <h3>Who the heck are you</h3>}
        </div>
    );
}
