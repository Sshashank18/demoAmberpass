import React from 'react'
import Grid from './Grid';
import Charts from './Charts';
import BarChart from './BarChart';
import '../Styles/Dashboard.css'

function Dashboard() {
  return (
    <div className="mycontainer">
      <div className="container-top">
        <div className="top-left">
          <div className="income">
            Total Income
            <h3 style={{ color: 'black', fontWeight: 'bold'}}>$124,563.00<span className="badge badge-pill badge-success" style={{marginLeft:'5px',fontSize:'12px'}}>+6.9%</span> </h3>
            <div className="percentLine">
              <div className="percentLeft" style={{ width: '200px' }}></div>
              <div className="percentRight" style={{ width: '80px' }}></div>
            </div>
            <span style={{ fontSize: '12px' }}>Yearly Goal</span>
          </div>
          <div className="users">
            New Users
            <h3 style={{ color: 'black', fontWeight: 'bold' }}>94.2% <span className="badge badge-pill badge-success" style={{marginLeft:'5px',fontSize:'12px'}}>+6.9%</span></h3>
            <div className="barChart">
              <BarChart top="60px" bottom="40px" />
              <BarChart top="50px" bottom="50px" />
              <BarChart top="0px" bottom="100px" />
              <BarChart top="20px" bottom="80px" />
            </div>
          </div>
        </div>
        <div className="top-right">
          <div className="rightHead">
            <span style={{ color: 'black', fontWeight: 'bold', fontSize: '22px', marginLeft: '15px', marginTop: '10px' }}>Balance</span>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" style={{ marginTop: '10px', marginRight: '15px', backgroundColor: 'white', color: 'grey' }} 
                type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Monthly
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="/">Daily</a>
                <a className="dropdown-item" href="/">Quarterly</a>
                <a className="dropdown-item" href="/">Yearly</a>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="rightCol">
            <div className="left">
              <span>Earnings</span>
              <h3 style={{ color: 'black', fontWeight: 'bold' }}>43.2% <span className="badge badge-pill badge-success" style={{marginLeft:'5px',fontSize:'12px'}}>+2.5%</span></h3>
            </div>
            <div className="right">
              <span>Sales Value</span>
              <h3 style={{ color: 'black', fontWeight: 'bold' }}>$95422 <span className="badge badge-pill badge-success" style={{marginLeft:'5px',fontSize:'12px'}}>+13.5%</span></h3>
            </div>
          </div>
          <Charts />
        </div>
      </div>
      <div className="container-bottom">
        <div className="transactions">
          <div className="transactions-header">
            <span style={{ color: 'black', fontWeight: 'bold', fontSize: '22px', marginLeft: '15px', marginTop: '10px' }}>Recent Transactions</span>
            <button className='btn btn-primary' style={{ marginRight: '15px', marginTop: '10px', backgroundColor:'#382BDB' }}>
              <i className="fa-solid fa-arrow-up-from-bracket" style={{ marginRight: '5px' }}></i>Export
            </button>
          </div>
          <div className="head2">
            <span style={{ marginRight: '5px', textDecoration: 'underline' ,color:'#382BDB'}}>Incoming</span>
            <span>Invoices</span>
          </div>
          <Grid />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
