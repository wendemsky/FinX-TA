import React from 'react'
import './FirstPageItem.css';

const FirstPageItem = (props)=> {

    let { timepoint, cloudcover, seeing, transparency, lifted_index, temp2m, prec_type } = props;

    return (
      <div className='my-3'>
        <div className="card text-white bg-dark" style={{zIndex: '-1'}}>
          <div style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0"
          }}>
          </div>
          <div className="card-body">
            <p className="card-text">timepoint : {timepoint}</p>
            <p className="card-text">cloudcover : {cloudcover}</p>
            <p className="card-text">seeing : {seeing}</p>
            <p className="card-text">transparency : {transparency}</p>
            <p className="card-text">lifted_index : {lifted_index}</p>
            <p className="card-text">temp2m : {temp2m}</p>
            <p className="card-text">prec_type : {prec_type}</p>
          </div>
        </div>
      </div>
    )
}

export default FirstPageItem
