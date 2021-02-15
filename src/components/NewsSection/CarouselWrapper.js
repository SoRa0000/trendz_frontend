import React from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const CarouselWrapper = () => {

    
    return (
        <Carousel>
                <div>
                    <img src="images/slide_1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="images/slide_2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="images/slide_3.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="images/slide_1.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="images/slide_2.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="images/slide_3.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    )
}

export default CarouselWrapper
