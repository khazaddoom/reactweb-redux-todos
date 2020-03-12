import React from 'react'
import { connect } from 'react-redux';
import { addToDoToDb } from '../redux/reducer';

class AddToDo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            textValue: ''
        }
    }

    onChange = (e) => {
        this.setState({
            textValue: e.target.value
        });
    }

    render() {
        return (
            <div className="add-todo">
                <input type="text" value={this.state.textValue} onChange={this.onChange}></input>
                <button onClick={this.props.addTodo.bind(this, this.state.textValue)}>Add ToDo</button>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addTodo: (value) => dispatch(addToDoToDb(value))
    }

}

export default connect(null, mapDispatchToProps)(AddToDo);
