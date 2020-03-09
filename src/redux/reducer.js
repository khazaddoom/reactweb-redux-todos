const initialState = {
    todos: [],
    selectedFilter: 'ALL',
    lastId: 0
}

let initialId = 0;

const reducer = (state=initialState, action) => {
    switch (action.type) {     
        case 'GET_TODOS' :
            return {
                ...state,
            }
        case 'ADD_TODO' :
            state.todos = [
                ...state.todos,
                { id: ++initialId, title: action.payload }
            ]
            return {
                ...state,
            }
        case 'DELETE_TODO' :
            return {
                ...state,
            }
        case 'TOGGLE_TODO' :
            return {
                ...state,
            }      
        default:
            return {...state};
    }
}

export default reducer;