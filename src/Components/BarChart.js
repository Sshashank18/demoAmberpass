import React from 'react'
import '../Styles/Bar.css'

function BarChart(props) {
  return (
    <div className='bar'>
        <div className="barTop" style={{height:props.top}}></div>
        <div className="barBottom"  style={{height:props.bottom}}></div>
    </div>
  )
}

export default BarChart
