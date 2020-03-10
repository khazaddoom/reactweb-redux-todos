import React from 'react'
import { connect } from 'react-redux';

class ToDoItem extends React.Component {
    render() {
        const { todoData } = this.props;
        return (
            <div>
                <input type="checkbox" checked={todoData.isComplete} onChange={this.props.toggleToDo.bind(this, todoData.id)}/>
                {todoData.title}
                <button onChange={this.props.deleteToDo.bind(this, todoData.id)}>Delete ToDo</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleToDo: (id) => dispatch({ type: 'TOGGLE_TODO', payload: id }),
        deleteToDo: (id) => dispatch({ type: 'DELETE_TODO', payload: id })
    }

}

export default connect(null, mapDispatchToProps)(ToDoItem);
