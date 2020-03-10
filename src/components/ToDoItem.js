import React from 'react'
import { connect } from 'react-redux';

class ToDoItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: this.props.todoData.isComplete
        };
    }


    onChange = (e) => {
        this.setState({
            isChecked: !this.state.isChecked
        });
        this.props.toggleToDo(e.target.id)
    }

    render() {
        const { todoData } = this.props;
        return (
            <div className="item">
                <input type="checkbox" id={todoData.id} checked={this.state.isChecked} onChange={this.onChange}/>
                <span>{todoData.title}</span>
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
