import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landmap from "./landmap/Landmap";
import Controller from "./controls/Controller";

const MAX_ROWS = 35;
const MAX_COLUMNS = 45;

export default class App extends React.Component {

    constructor(properties) {
        super(properties);
        this.state = {rows: 5, columns: 8};
        this.handleRowAmountChanged = this.handleRowAmountChanged.bind(this);
        this.handleColumnAmountChanged = this.handleColumnAmountChanged.bind(this);
    }

    render() {
        const rows = this.state.rows;
        return (
            <div className="App">
                <div className="grid-container">
                    <div className="grid-controller-area">
                        <Controller dimensions={{rows: this.state.rows, columns: this.state.columns}}
                                    onRowAmountChanged={this.handleRowAmountChanged}
                                    onColumnAmountChanged={this.handleColumnAmountChanged}/>
                    </div>
                    <div className="grid-main-content">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                        </header>
                        <Landmap width={this.state.columns} height={rows}/>
                    </div>
                </div>
            </div>
        );
    }

    handleRowAmountChanged(rows) {
        if(rows <= MAX_ROWS) {
            this.setState({rows, columns: this.state.columns});
        } else {
            this.setState({rows: MAX_ROWS, columns: this.state.columns});
        }

    }

    handleColumnAmountChanged(columns) {
        if(columns <= MAX_COLUMNS) {
            this.setState({rows: this.state.rows, columns});
        } else {
            this.setState({rows: this.state.rows, columns: MAX_COLUMNS});
        }

    }
}
