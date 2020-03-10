const initialState = {
    todos: [],
    selectedFilter: 'ALL',
    lastId: 0
}

let initialId = 0;

const reducer = (state=initialState, action) => {
    switch (action.type) {     
        
        case 'ADD_TODO' :
            state.todos = [
                ...state.todos,
                { id: ++initialId, title: action.payload, isComplete: false }
            ]
            return {
                ...state,
            }
        case 'DELETE_TODO' :
            return {
                ...state,
            }
        case 'TOGGLE_TODO' :

            let todos = state.todos.map(todo => {
                if(todo.id === action.payload)
                    todo.isComplete = !todo.isComplete;
                return todo;
            });
            
            state.todos = todos;

            return {
                ...state,
            }
        case 'GET_TODOS' :
            return {
                ...state,
            }     
        default:
            return {...state};
    }
}

export default reducer;