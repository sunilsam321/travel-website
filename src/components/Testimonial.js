import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cop3 from "../assets/arsh.png";
import Cop1 from "../assets/pra.png";
import Cop2 from "../assets/kau.png";
import Cop from "../assets/meera.png";
import Cop4 from "../assets/jet1.jpg";

const testimonials = [
  {
    img: Cop, // Correct usage of the imported image
    name: "Meera Kumari",
    stars: 5,
    review: "Good service and supportive staff!"
  },
  {
    img: Cop1, // Correct usage of the imported image
    name: "Pratyush Anand",
    stars: 4,
    review: "Cheapest flight tickets ever and a very supportive team."
  },
  {
    img: Cop2, // Correct usage of the imported image
    name: "Kaushal Singh",
    stars: 5,
    review: "I got cheap flight ticket from other websites great deal!"
  },
  {
    img: Cop3, // Correct usage of the imported image
    name: "Arsh Mehta",
    stars: 3,
    review: "Best travel agency in Ranchi and very cheap flight tickets."
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div style={{
      //background: "url('https://picsum.photos/1920/1080') no-repeat center center",
      backgroundSize: 'cover',
      height: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Container fluid className="p-0">
        <Row className="justify-content-center">
          <Col lg={8} style={{ position: 'relative' }}>
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} style={{
                  
                  background: 'rgba(255, 255, 255, 0.8)',
                  padding: '20px',
                  borderRadius: '10px',
                  textAlign: 'center',
                  maxWidth: '500px',
                  margin: '0 10px'
                }}>
                  <Image src={testimonial.img} roundedCircle style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                    marginBottom: '10px'
                  }} />
                  <h5>{testimonial.name}</h5>
                  <p>{"⭐".repeat(testimonial.stars)}</p>
                  <p>{testimonial.review}</p>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
