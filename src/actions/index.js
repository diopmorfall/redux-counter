export const increment = () => {
    return {
        type: 'INCREMENT'
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