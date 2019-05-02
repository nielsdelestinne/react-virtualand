import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landmap from "./landmap/Landmap";
import Controller from "./controls/Controller";

class App extends React.Component {

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
        this.setState({rows, columns: this.state.columns});
    }

    handleColumnAmountChanged(columns) {
        this.setState({rows: this.state.rows, columns});
    }
}

export default App;
