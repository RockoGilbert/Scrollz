import { Parallax } from "react-parallax";
import rays from "../img/rays.jpg"
import { animateScroll as scroll } from "react-scroll";


const smoothScroll = () => {
    scroll.scrollToBottom();
};


const imageOne = () => {
    return (
        <Parallax className="image" bgImage={rays} strength={800}>
            <div className="content">
                <span className="img-txt" onClick={smoothScroll}>A trip to space</span>
            </div>
        </Parallax>
    );
}



export default imageOne;