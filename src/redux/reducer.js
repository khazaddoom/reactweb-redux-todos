const initialState = {
    todos: [{id: 100}],
    selectedFilter: 'ALL',
    lastId: 0
}

const reducer = (state=initialState, action) => {
    switch (action.type) {     
        case 'CLEAN_TODOS' :
            return {
                ...state,
                todos: [{id: -999}]
            }      
        default:
            return {...state};
    }
}

export default reducer;