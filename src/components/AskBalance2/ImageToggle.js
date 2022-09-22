import React, {useRef} from "react";

const ImageToggle = ({ primaryImg, secondaryImg }) => {

    const imageRef = useRef(null);

    return (
        <img onMouseOver={() => {
            imageRef.current.src = secondaryImg;
        }} onMouseOut={() => {
            imageRef.current.src = primaryImg;
        }}  
            class="train-apple"
            src={primaryImg}
            alt="primary image"
            ref={imageRef}
        />
    )
}

export default ImageToggle;