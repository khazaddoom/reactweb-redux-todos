import React from 'react'
import { connect } from 'react-redux'
import ToDoItem from './ToDoItem'

class ToDos extends React.Component {
    render() {
        return (
            <React.Fragment>
               {this.props.todos.map(todo => <ToDoItem todoData={todo}/>)}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, null)(ToDos);
