import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Banner.css'
import blackwidow from '../Images/blackwidow-image.webp'
import cruella from '../Images/cruella.webp'
import luca from '../Images/luca.webp'
import whatif from '../Images/whatif.webp'

function Banner() {
    let settings={
        dots:false,
        infinite:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay:true
    }
    return (
            <Slider className="slider" {...settings}> 
                <div className="banner_container">
                    <img src={blackwidow} alt="" />
                    <div className="banner_description">
                        <h2>Black Widow</h2>
                        <br />
                        <h4>Superhero 2021</h4>
                        <br />
                        <p>Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.</p>
                    </div>
                </div>
                <div className="banner_container">
                    <img src={cruella} alt="" />
                    <div className="banner_description">
                        <h2>Curella</h2>
                        <br />
                        <h4>Crime 2021</h4>
                        <br />
                        <p>The film is about the rebellious early days of cinema's most notorious and fashionable villains, the legendary Cruella de Vil.</p>
                    </div>
                </div>
                <div className="banner_container">
                    <img src={luca} alt="" />
                    <div className="banner_description">
                        <h2>Luca</h2>
                        <br />
                        <h4>Animation 2021</h4>
                        <br />
                        <p>The movie is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides.</p>
                    </div>
                </div>
                <div className="banner_container">
                    <img src={whatif} alt="" />
                    <div className="banner_description">
                        <h2>What If..?</h2>
                        <br />
                        <h4>Marvel Superhero</h4>
                        <br />
                        <p>What If…? flips the script on the MCU, reimagining famous events from the films in unexpected ways.</p>
                    </div>
                </div>
            </Slider>
    )
}

export default Banner
