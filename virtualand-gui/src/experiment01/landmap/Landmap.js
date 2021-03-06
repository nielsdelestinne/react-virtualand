import React from 'react';
import './Landmap.css';

export default class Landmap extends React.Component {

    render() {
        return (
            <section className="Landmap">
                <table>
                    <tbody>
                        {this.generateCells()}
                    </tbody>
                </table>
            </section>
        );
    }

    generateCells() {
        let allRows = [];
        for (let row = 0; row < this.props.height; row++) {
            let allColumns = [];
            for (let column = 0; column < this.props.width; column++) {
                allColumns.push(<td key={row.toString().concat(column.toString())} style={this.cellColors()}>{column}</td>)
            }
            allRows.push(<tr key={row}>{allColumns}</tr>)
        }
        return allRows;
    }

    cellColors() {
        return {backgroundColor: `rgba(${this.props.height*5}, ${this.props.width*2}, 50, 1)`};
    }
}