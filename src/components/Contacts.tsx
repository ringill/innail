import React, { Component } from 'react';
import contacts from "../contacts.png";
import './contacts.css';

interface IState {
    currentCount: number;
}

export class Contacts extends Component<{}, IState> {

    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

    render() {
        return <div>
            {
               <img src={contacts} className="contacts-logo" alt="logo" />
            }
        </div>;
    }
}
