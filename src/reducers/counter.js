//? a good idea is to separate reducers and actions in their folders, and then import them

const counterReducer = (state = 0, action) => { //* the reducer describes how the state gets transformed by the action
    //? it needs the value of the state which we update, and the action

    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
        //! if we don't have a covered case, we should return the current state
    }
}

export default counterReducer;