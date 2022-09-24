import React, { useState, useRef, useEffect } from "react";

const MyKingdom = ({myMoney}) => {

    const [vector, setVector] = useState(null);

    return (
        <div className={`grid-item`}>
            <h2>MyKingdom</h2>
            <h3>My money: {myMoney}</h3>
            
        </div>
    )
}

export default MyKingdom;