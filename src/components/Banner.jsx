import React from 'react'
import './style.scss'
import { CardMedia } from '@mui/material'
import hmd_banner0 from '../assets/Home_banner.jpeg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




//All slide images herer
const slideImg = [hmd_banner0, hmd_banner0, hmd_banner0, hmd_banner0]


const Banner = () => {



  // this function for only arrrows
  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius: '50%', }}
        onClick={onClick}
      />
    );
  }
  function hideArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", }}
        onClick={onClick}
      />
    );
  }
//lkjsdlfsjfs
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          nextArrow: <hideArrow />,
          prevArrow: <hideArrow />,
        }
      },
    ]

  };



  return (


    <div className='homeBanner'>
      <Slider {...settings} >
        {
          slideImg.map((img, index) => {
            return (
              <CardMedia
                key={index}
                component="img"
                className='img'
                image={img}
                alt="services"
              />
            )
          })
        }



      </Slider>



    </div>



  )
}

export default Banner