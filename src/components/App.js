import React, { Component } from "react";
import {observable} from 'mobx'

import '../styles/App.css';

class App extends Component {
    render() {
        @observable
        const a = '123';
        return (
            <div>
            <h1>My React App! </h1>
        </div>
    );
    }
}

export default App;