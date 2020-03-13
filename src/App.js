import React from 'react';
import './App.css';
import Header from './components/Header';
import ToDos from './components/ToDos';
import AddToDo from './components/AddToDo';

export default class App extends React.Component {
        render() {
            return (
                <React.Fragment >
                    <Header />
                    <AddToDo />
                    <ToDos />
                </React.Fragment>
            )
        }
}