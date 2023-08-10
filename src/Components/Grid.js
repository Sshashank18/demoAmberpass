import React, { useState } from 'react'
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function Grid() {
    const [rowData] = useState([
        { InvoiceID: "MD6451R", Date: "08.04.2021", Description: "Code 5982MD01", Status: "InComplete", Descriptions: "$2500.00" },
        { InvoiceID: "MD6451R", Date: "08.04.2021", Description: "Code 5982MD01", Status: "Completed", Descriptions: "$2500.00" },
        { InvoiceID: "MD6451R", Date: "08.04.2021", Description: "Code 5982MD01", Status: "Completed", Descriptions: "$2500.00" },
        { InvoiceID: "MD6451R", Date: "08.04.2021", Description: "Code 5982MD01", Status: "Completed", Descriptions: "$2500.00" },
        { InvoiceID: "MD6451R", Date: "08.04.2021", Description: "Code 5982MD01", Status: "Completed", Descriptions: "$2500.00" },
        { InvoiceID: "MD6451R", Date: "08.04.2021", Description: "Code 5982MD01", Status: "Completed", Descriptions: "$2500.00" },
    ]);

    const [columnDefs] = useState([
        {
            field: "InvoiceID",
            headerCheckboxSelection: true,
            checkboxSelection: true,
            showDisabledCheckboxes: true,
            sortable: true,
            width: 250,
        },
        {
            field: "Date",
            sortable: true,
            width:110
        },
        {
            field: "Description",
            sortable: true,
            width:150
        },
        {
            field: "Status",
            sortable: true,
            width:120,
            cellRenderer: (params)=>{
                if(params.value === 'InComplete'){
                    return <span className="badge badge-pill badge-danger">{params.value}</span>
                }
                return <span className="badge badge-pill badge-success">{params.value}</span>
            },
        },
        {
            field: "Descriptions",
            sortable: true,
            width:150
        },
    ]);

    return (
        <div className="ag-theme-alpine" style={{ height: 300, width: 800 }}>
            <AgGridReact rowData={rowData} columnDefs={columnDefs} rowSelection={'multiple'} multiSortKey={'ctrl'}></AgGridReact>
        </div>
    );
}

export default Grid
