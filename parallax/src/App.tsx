import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-scroll';
import mountain from './mountain.jpg'
import waterfallImage from './waterfall.jpg';
import forestImage from './forest.jpg';
import beachImage from './beach.jpg';

const App = () => {
    return (
        <>
            <Parallax bgImage={mountain} strength={500}>

                <div style={{ height: '500px' }}>
                    <h1>Mountain Section</h1>
                    <Link style={{ color: 'white' }} to="waterfall" smooth>
                        Scroll down to waterfall section
                    </Link>
                </div>
            </Parallax>
            <Parallax bgImage={waterfallImage} strength={500}>
                <div style={{ height: '500px' }}>
                    <h1>Waterfall Section</h1>
                    <Link style={{ color: 'white' }} to="forest" smooth>
                        Scroll down to forest section
                    </Link>
                </div>

            </Parallax>
            <Parallax bgImage={forestImage} strength={500}>
                <div style={{ height: '500px' }}>
                    <h1>Forest Section</h1>
                    <Link style={{ color: 'white' }} to="beach" smooth>
                        Scroll down to beach section
                    </Link>
                </div>
            </Parallax>
            <Parallax bgImage={beachImage} strength={500}>
                <div style={{ height: '500px' }}>
                    <h1 style={{ color: 'white' }}>End of Prallax</h1>
                </div>
            </Parallax>
        </>
    );
};

export default App;
