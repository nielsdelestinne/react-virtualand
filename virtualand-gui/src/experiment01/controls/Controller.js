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

                <form>
                    <div className="form-group">
                        <label htmlFor="inputRows">Rows</label>
                        <input type="number" className="form-control" id="inputRows"
                               placeholder="amount of rows..."
                               value={this.props.dimensions.rows}
                               onChange={this.handleRowAmountChanged}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputColumns">Columns</label>
                        <input type="number" className="form-control" id="inputColumns"
                               placeholder="amount of columns..."
                               value={this.props.dimensions.columns}
                               onChange={this.handleColumnAmountChanged}/>
                    </div>
                </form>

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


