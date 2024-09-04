//import React from 'react'
//import { Container, Row, Col, Image } from 'react-bootstrap';

import React, { useState, useRef, useEffect } from 'react'

import './ChooseStyle.css'
//import 'bootstrap/dist/css/bootstrap.min.css';


import Slider from 'react-slick';
import Img from "../assets/icons1.svg"
import Img1 from "../assets/icons2.svg"
import Img2 from "../assets/icons3.svg"
import Img3 from "../assets/icons4.svg"
import Img4 from "../assets/icons5.svg"
// import Imge from "../assets/arsh.png"
// import Imge1 from "../assets/pra.png"
// import Imge2 from "../assets/kau.png"
// import Imge3 from "../assets/meera.png"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


// const testimonials = [
//     {
//       img: "https://via.placeholder.com/100", // Replace with your image URL
//       name: "John Doe",
//       stars: 5,
//       review: "This is an amazing service!"
//     },
//     {
//       img: "https://via.placeholder.com/100", // Replace with your image URL
//       name: "Jane Smith",
//       stars: 4,
//       review: "Great experience, highly recommend!"
//     },
//     {
//       img: "https://via.placeholder.com/100", // Replace with your image URL
//       name: "Alice Johnson",
//       stars: 5,
//       review: "Exceptional quality and service."
//     },
//     {
//       img: "https://via.placeholder.com/100", // Replace with your image URL
//       name: "Bob Brown",
//       stars: 3,
//       review: "Good, but could be better."
//     },
//     // Add more testimonials as needed
//   ];
  


const Choose = () => {

// const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 2,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

   

    return(
        <section className='choose section'>
            <div className='secContainer'>
                <h2 className='title'>
                    Why Should You Choose Us?
                </h2>
                <br></br>
                <br></br>
                <div className='mainContent container grid'>
                    <div className='singleItem'>
                        <img src={Img} alt="Image Name"/>
                        <br></br>
                        <h3>No Hidden Charges</h3>
                        
                        <p>
                        With Traventura, enjoy transparent travel booking with no hidden charges <br></br>
                        what you see is what you pay.
                        </p>
                    </div>

                    <div className='singleItem'>
                        <img src={Img1} alt="Image Name"/>
                        <br></br>
                        <h3>Quick Response</h3>

                        <p>
                        Experience rapid assistance with <br></br>
                        Traventura's quick response time delivered.
                        </p>
                    </div>

                    <div className='singleItem'>
                        <img src={Img2} alt="Image Name"/>
                        <br></br>
                        <h3>100% Customer Satisfaction</h3>

                        <p>
                        Achieve 100% customer satisfaction with Traventura's 
                        dedicated service and transparent pricing.
                        </p>
                    </div>

                    <div className='singleItem'>
                        <img src={Img3} alt="Image Name"/>
                        <br></br>
                        <h3>Best Price Guranteed</h3>

                        <p>
                        Travel confidently knowing Traventura <br></br>
                        guarantees the best prices for your journey.

                        </p>
                        </div>

                        <div className='singleItem'>
                        <img src={Img4} alt="Image Name"/>
                        <br></br>
                        <h3>Friendly Support</h3>

                        <p>
                        Experience the warmth of friendly support with 
                        Traventura—your trusted travel companion.
                        </p>
                    </div>

            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <h2 className='title'>What People Say About Us</h2>
           

            </div>


        </section>
    )
}




export default Choose