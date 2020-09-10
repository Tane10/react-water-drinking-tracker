import React from 'react';
import HollowMan from "../images/man_svg.svg";
import ImageMask from "../images/color_man_mask.svg";

export const FillingMan = ({howFull}) => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridTemplateRows: '1fr',
            gridTemplateAreas: 'overlap'
        }}>
            <img  src={HollowMan} alt="HollowMan"
                style={{ zIndex: '2', gridArea: 'overlap'}} />
            <img src={ImageMask} alt="HollowMan"
                style={{
                    zIndex: '1', 
                     clipPath: `polygon(0 ${howFull}%, 100% ${howFull}%, 100% 100%, 0% 100%)`,
                    height: "440px",
                    gridArea: 'overlap',
                }} />
        </div>
    )
}
