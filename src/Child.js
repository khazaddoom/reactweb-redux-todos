import React from 'react'
import { connect } from 'react-redux';

class Child extends React.Component {
    render() {

        return(
            <React.Fragment>
                {this.props.todos[0].id}
                <button onClick={this.props.cleanToDos}>Clean</button>
            </React.Fragment>
        )
        
    }
}

const mapStateToProps = (state /*, ownProps */) => {
    const { todos }  = state;
    return {
        todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cleanToDos: () => dispatch({type: 'CLEAN_TODOS'})
    }

}
  
export default connect(mapStateToProps, mapDispatchToProps)(Child);