import React, { Component } from "react";
import {observable} from 'mobx'

import '../styles/App.css';

class App extends Component {
    @observable a = '123';
    render() {
       console.log(this.a);
        return (
            <div>
            <h1>My React App! </h1>
        </div>
    );
    }
}

export default App;