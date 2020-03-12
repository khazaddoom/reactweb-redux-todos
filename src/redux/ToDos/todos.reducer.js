import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, ADD_TODO_STARTING, ADD_TODO_FAILED } from "./todos.actions";

const initialState = {
    todos: [],
    selectedFilter: 'ALL',
    lastId: 0
}

let initialId = 0;

export const todosReducer = (state=initialState, action) => {
    switch (action.type) {     
        
        case ADD_TODO:

            state.todos = [
                ...state.todos,
                { id: ++initialId, title: action.payload, isComplete: false }
            ]
            return {
                ...state,
            }
        case DELETE_TODO :
            let tobeReplacedToDos = state.todos.filter(todo => todo.id !== action.payload);
            
            state.todos = tobeReplacedToDos;            

            return {
                ...state,
            }
        case TOGGLE_TODO :

            let todos = state.todos.map(todo => {
                if(todo.id === action.payload)
                    todo.isComplete = !todo.isComplete;
                return todo;
            });
            
            state.todos = todos;

            return {
                ...state,
            }

        case ADD_TODO_STARTING: 
            return {
                ...state
            }
        
        case ADD_TODO_FAILED: 
            return {
                ...state
            }
        default:
            return {...state};
    }
}


export const addToDoToDb = (value) => {
    return (dispatch) => {
        dispatch({
            type: ADD_TODO_STARTING,
            payload: 'starting'
        });

        getSomething(value)
            .then(() => dispatch({
                type: ADD_TODO,
                payload: value
            }))
            .catch(err => dispatch({
                type: ADD_TODO_FAILED,
                payload: 'error',
                errorMessage: err
            }))
    }
}

export const getSomething = (value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(` ${value} Added succesfully to db.`)
        }, 2000);
    })
}