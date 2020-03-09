import React from 'react';
import './App.css';
import Child from './Child'
import Header from './components/Header';
import ToDos from './components/ToDos';

export default class App extends React.Component {
        render() {
            return (
                <React.Fragment >
                    <Header / >
                    <ToDos />
                </React.Fragment>
            )
        }
}