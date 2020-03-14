import React from 'react'
import { connect } from 'react-redux';
import { addToDoToDb } from '../redux/ToDos/todos.reducer';

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
            <div style={styles.container}>
                <input type="text" value={this.state.textValue} onChange={this.onChange} style={styles.input}></input>
                <button onClick={this.props.addTodo.bind(this, this.state.textValue)}>Add ToDo</button>
            </div>
        )
    }
}

const styles = {
    container : {
        backgroundColor: 'slateblue',
        margin: '0 auto',
        textAlign: 'center',
        padding: '1rem'
    },
    input : {
        marginRight: '1rem'
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addTodo: (value) => dispatch(addToDoToDb(value))
    }

}

export default connect(null, mapDispatchToProps)(AddToDo);
