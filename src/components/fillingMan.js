import React from 'react';
import HollowMan from "../images/man_svg.svg";
import ImageMask from "../images/color_man_mask.svg";

export const FillingMan = ({howFull}) => {

    const postionref = React.useRef();
    const [maskPostion, setMaskPostion] = React.useState();
    const [maskHeight, setMaskheight] = React.useState();
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

    React.useEffect(() => {

        setMaskPostion(postionref.current.offsetHeight);
        console.log(postionref)

        // function handleResize() {
        //     setDimensions({
        //         height: window.innerHeight,
        //         width: window.innerWidth
        //     });

        //     window.addEventListener('resize', handleResize);

        //     return _ => {
        //         window.removeEventListener('resize', handleResize)

        //     }
        // }

    }, [postionref, maskPostion, dimensions, maskHeight])

    console.log(howFull)

    return (
        <div>
            <img ref={postionref} src={HollowMan} alt="HollowMan"
                style={{ zIndex: '2', }} />
            <img src={ImageMask} alt="HollowMan"
                style={{
                    zIndex: '1', position: "relative",
                    bottom: `${maskPostion}px`, clipPath: `polygon(0 ${howFull}%, 100% ${howFull}%, 100% 100%, 0% 100%)`,
                    height: `${maskHeight}px`
                }} />
        </div>
    )
}
