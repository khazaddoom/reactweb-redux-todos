import React from 'react'
import { connect } from 'react-redux';

class ToDoItem extends React.Component {
    render() {
        return (
            <div>
                ToDo Item Space
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, null)(ToDoItem);

