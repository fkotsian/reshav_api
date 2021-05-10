import React, { useState, useEffect } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

/*
Presentation Component For Grid data
Pass row columns and data
*/


export const Grid = props => {
    return (
            <div className="ag-theme-alpine" style={{height: 400, width: 900}}>
                <AgGridReact
                    rowData={props.rowData}>
                    {props.fields.map(field => <AgGridColumn field={field} />)}
                </AgGridReact>
            </div>
    );
}