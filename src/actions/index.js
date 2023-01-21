export const increment = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
        //* if I want to take parameters when I dispatch an action, I can do it this way
    }
}
//* an action kinda describes what you want to do (for example, increment or decrement); it returns the type of the action
export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const login = () => {
    return {
        type: 'SIGN_IN'
    }
}