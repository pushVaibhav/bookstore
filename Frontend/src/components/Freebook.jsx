import React from 'react'
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';


export default function Freebook() {
    // const freedata = list.filter((data) => data.category === "Free")
    const freedata = list.filter(data =>{ return data.category === "Free"})
    // console.log(freedata)
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="max-w-screen-2xl container my-10 mx-auto md:px-20 px-4">
            <div>
                <h1 className="text-2xl font-bold">Free Offered Courses</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, et fugit eaque aspernatur mollitia sapiente labore quis officiis, tempora modi temporibus velit.</p>
            </div>
            <div>
                <div className="slider-container">
                    <Slider {...settings}>
                            {freedata.map((item) => (
                                <Card item={item} key={item.id} />))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
