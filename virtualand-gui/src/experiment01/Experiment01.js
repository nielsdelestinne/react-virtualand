import * as React from "react";
import Controller from "./controls/Controller";
import Landmap from "./landmap/Landmap";
import "./Experiment01.css"

const MAX_ROWS = 30;
const MAX_COLUMNS = 45;

export default class Experiment01 extends React.Component {

    constructor(properties) {
        super(properties);
        this.state = {rows: 5, columns: 8};
        this.handleRowAmountChanged = this.handleRowAmountChanged.bind(this);
        this.handleColumnAmountChanged = this.handleColumnAmountChanged.bind(this);
    }

    render() {
        return (
            <div className="Experiment01">
                <div className="grid-container">
                    <div className="grid-controller-area">
                        <Controller dimensions={{rows: this.state.rows, columns: this.state.columns}}
                                    onRowAmountChanged={this.handleRowAmountChanged}
                                    onColumnAmountChanged={this.handleColumnAmountChanged}/>
                    </div>
                    <div className="grid-main-content">
                        <Landmap width={this.state.columns} height={this.state.rows}/>
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