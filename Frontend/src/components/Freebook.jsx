
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Freebook = () => {

  const [book , setBook] = useState([]);

  const  handleApi = async () =>{
 try {
   const result = await axios.get("http://localhost:8000/api/v1/book");
  
   setBook(result.data.filter((dat) => dat.category === "Free"));
  
 } catch (error) {
   console.log(error.message);
 }  
  }
 
  useEffect(() =>{
   handleApi();
  } , [] )


   
 //  slider
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
    <div className= 'max-w-screen-2xl container mx-auto px-6  md:px-24'>
     <div>
     <h1 className='text-xl font-semibold  mt-8'>Free Offered Courses</h1>
     <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore illum expedita incidunt dicta molestiae. Porro dicta et sint quibusdam! Amet veniam quos praesentium, iure sequi eos a ipsa saepe fugiat?</p>
     </div>

 {/* slider */}
 <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
    </div>
   
    </>
  )
}

export default Freebook
