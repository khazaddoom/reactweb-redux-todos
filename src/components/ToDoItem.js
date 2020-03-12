import React from 'react'
import { connect } from 'react-redux';
import * as ACTION_TYPES from '../redux/ToDos/todos.actions';

class ToDoItem extends React.Component {

    render() {
        const { todoData } = this.props;
        return (
            <div className="item">
                <input type="checkbox" id={todoData.id} checked={todoData.isChecked} onChange={this.props.toggleToDo.bind(this, +todoData.id)}/>
                <span>{todoData.title}</span>
                <button onClick={this.props.deleteToDo.bind(this, todoData.id)}>Delete ToDo</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleToDo: (id) => dispatch({ type: ACTION_TYPES.TOGGLE_TODO, payload: id }),
        deleteToDo: (id) => dispatch({ type: ACTION_TYPES.DELETE_TODO, payload: id })
    }

}

export default connect(null, mapDispatchToProps)(ToDoItem);
