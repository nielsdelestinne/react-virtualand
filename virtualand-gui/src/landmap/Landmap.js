import React from 'react';
import './Landmap.css';

function Landmap({width, height}) {
    return (
        <section className="Landmap">
            <table>
                <tbody>
                    {generateCells(width, height)}
                </tbody>
            </table>
        </section>
    );
}

export default Landmap;

function generateCells(width, height) {
    let allRows = [];
    for (let row = 0; row < height; row++) {
        let allColumns = [];
        for (let column = 0; column < width; column++) {
            allColumns.push(<td key={row.toString().concat(column.toString())}>{column}</td>)
        }
        allRows.push(<tr key={row}>{allColumns}</tr>)
    }
    return allRows;
}