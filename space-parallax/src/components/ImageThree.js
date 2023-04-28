import { Parallax } from "react-parallax";
import spaceship from "../img/spaceship.jpg"
import { animateScroll as scroll } from "react-scroll";


const smoothScroll = () => {
    scroll.scrollToTop();
};

const imageThree = () => {
    return (
        <Parallax className="image" bgImage={spaceship} strength={700}>
            <div className="content">
                <span className="img-txt" onClick={smoothScroll}>A trip to space</span>
            </div>
        </Parallax>
    );
}



export default imageThree;