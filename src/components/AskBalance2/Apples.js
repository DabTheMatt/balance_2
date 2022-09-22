import React from "react";
import ImageToggle from "./ImageToggle";

const Apples = () => {
    return (
        <div>
            <ImageToggle primaryImg={require("../../assets/train/apple_bw.jpg")} secondaryImg={require("../../assets/train/apple_col.jpg")}/>
           
        </div>
    )
}

export default Apples;

