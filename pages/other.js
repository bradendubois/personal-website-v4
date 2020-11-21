

import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Slider from "react-slick"

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const Page = () => {

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <p>Hey</p>
                </div>
                <div>
                    <p>There</p>
                </div>
            </Slider>
        </div>
    )
}

export default Page