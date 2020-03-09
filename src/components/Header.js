import React from 'react';
import '../App.css'

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="header">
                    <a href="#default" className="logo">ToDo App with React Redux</a>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;
