import { Parallax } from "react-parallax";
import Satellite from "../img/satellite.jpg"
import { animateScroll as scroll } from "react-scroll";


const smoothScroll = () => {
    scroll.scrollToBottom();
};




const imageTwo = () => {
    return (
        <Parallax className="image" bgImage={Satellite} strength={900}>
            <div className="content">
                <span className="img-txt" onClick={smoothScroll}>A trip to space</span>
            </div>
        </Parallax>
    );
}



export default imageTwo;