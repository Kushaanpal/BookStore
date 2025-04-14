import React from 'react'
import Cards from "../components/Cards.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick"; 

import list from "../data/list.json"
const Freebook = () => {
    const filterData=list.filter((data)=>data.category==="Free");
    console.log(filterData);
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
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
        <h1 className='mt-10 font-semibold text-xl pb-2'>Free offered Courses</h1>
        <p className='mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores vel beatae, eligendi veniam nam minus fugiat. Impedit architecto libero necessitatibus doloremque earum aspernatur, aliquam, qui, reprehenderit incidunt molestias obcaecati numquam!
        </p>
        </div>
        <div>
        <Slider {...settings}>
            
            {filterData.map((item)=>{
                return <Cards item={item} key={item.id}/>//props are way to pass data from parent to child component 
            })}
        
          
      </Slider>
        </div>
    </div>
    </>
  );
}

export default Freebook;
