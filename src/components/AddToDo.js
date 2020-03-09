import React from 'react'
import { connect } from 'react-redux';

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
            <div>
                <input type="text" value={this.state.textValue} onChange={this.onChange}></input>
                <button onClick={this.props.addTodo.bind(this, this.state.textValue)}>Add ToDo</button>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addTodo: (value) => dispatch({
            type: 'ADD_TODO',
            payload: value
        })
    }

}

export default connect(null, mapDispatchToProps)(AddToDo);
