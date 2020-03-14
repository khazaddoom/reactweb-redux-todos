import React from 'react';
import '../App.css'

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div style={styles.header}>
                    <a href="#default" style={styles.logo}>ToDo App with React Redux</a>
                </div>
            </React.Fragment>
        )
    }
}


const styles = {
    logo: {
        fontSize: '25px',
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        padding: '12px',
        textDecoration: 'none',
        lineHeight: '25px',
        borderRadius: '4px'
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        padding: '20px 10px'
    }

}

export default Header;
