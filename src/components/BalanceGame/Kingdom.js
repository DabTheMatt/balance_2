import React, { useState, useRef, useEffect } from "react";

const Kingdom = ({name, clockOne}) => {

    return (
        <div className="grid-item">
            {name}<br/>{clockOne}
        </div>
    )
}

export default Kingdom;