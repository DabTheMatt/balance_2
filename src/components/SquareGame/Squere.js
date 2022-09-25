import React, { useState, useRef, useEffect } from "react";

const Squere = ({index, name, relations}) => {

    return (
        <div className={`grid-item`} >
            <div className="relation-chart" style={{height: `${relations}%`}}></div>
                <h2>{name}</h2>
                 <p>{relations}</p>
            
           
        </div>
    )
}

export default Squere;