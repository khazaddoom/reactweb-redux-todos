import React from 'react';
import '../App.css'

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="header">
                    <a href="#default" class="logo">ToDo App with React Redux</a>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;
