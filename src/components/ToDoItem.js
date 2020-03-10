import React from 'react'
import { connect } from 'react-redux';

class ToDoItem extends React.Component {
    render() {
        return (
            <div>
                <input type="checkbox" />
                {this.props.todoData.title}
                <button>Delete ToDo</button>
            </div>
        )
    }
}

export default ToDoItem;