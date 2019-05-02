import React from 'react';
import './Controller.css';

export default class Controller extends React.Component {

    constructor(props) {
        super(props);
        this.handleRowAmountChanged = this.handleRowAmountChanged.bind(this);
        this.handleColumnAmountChanged = this.handleColumnAmountChanged.bind(this);
    }

    render() {
        return (
            <aside className="Controller">
                <div>
                    Rows: <br/>
                    <input type="number" name="rows"
                           value={this.props.dimensions.rows}
                           onChange={this.handleRowAmountChanged} />

                    Columns: <br/>
                    <input type="number" name="columns"
                           value={this.props.dimensions.columns}
                           onChange={this.handleColumnAmountChanged} />
                </div>
            </aside>
        );
    }

    handleRowAmountChanged(event) {
        this.props.onRowAmountChanged(event.target.value);
    }

    handleColumnAmountChanged(event) {
        this.props.onColumnAmountChanged(event.target.value);
    }
}


