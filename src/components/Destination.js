import JetImg from "../assets/jet1.jpg"
import Jet2Img from "../assets/jet2.jpg"
import HotelImg from "../assets/hotel1.jpg"
import Hotel2Img from "../assets/hotel2.jpg"
import BusImg from "../assets/bus1.jpg"
import CarImg from "../assets/car1.jpg"
import HoliImg from "../assets/hotel3.jpg"
import Holi1Img from "../assets/holi.jpg"
// import vid from "../images/vid.mp4"


import "./DestinationStyle.css"
import DestinationData from "./DestinationData"


const Destination = () =>{
    return(

        
           


        <div className="destination">
            {/* <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br> */}
            <h1>Plan Your Travel With Confidence</h1>
            <h2>Our Services</h2>

           <DestinationData
                 className="first-des"
           
           heading="Flights"

           text="At Traventura, we specialize in providing seamless flight ticket booking services. Whether you're planning 
           a business trip, a family vacation, or a spontaneous getaway, our expert team ensures you get the best deals and a 
           hassle-free booking experience. Let us handle your flight tickets, so you can focus on enjoying your journey. 
           Explore more at Traventura!"
           
           img1={JetImg}
        //   video={vid}
           img2={Jet2Img} 
           
           />

        <DestinationData
            className="first-des-reverse"
           
           heading="Hotels"

           text="At Traventura, we excel in booking the perfect hotel accommodations for your travels. Whether it's a luxurious stay, 
           a cozy boutique hotel, or a budget-friendly option, our team ensures you get the best deals and a stress-free booking 
           experience. Let us handle your hotel reservations, so you can relax and enjoy your trip. Discover more at Traventura!"
          img1={HotelImg}
          img2={Hotel2Img} 
           
           />

        <DestinationData
                 className="first-des"
           
           heading="Holidays"

           text="At Traventura, we specialize in planning unforgettable holidays tailored to your preferences. Whether it's a relaxing 
           beach vacation, an adventurous mountain trek, or a cultural city tour, our team ensures you get the best packages 
           and a seamless booking experience. Let us handle your holiday plans, so you can focus on making memories. 
           Explore more at Traventura!"
           
          img1={HoliImg}
          img2={Holi1Img} 
           
           />


        <DestinationData
                    className="first-des-reverse"
           
           heading="Road Transportation"

           text="At Traventura, we excel in providing reliable road transportation services for your travel needs. Whether 
           it's a comfortable car rental, a spacious bus for group travel, or a luxury coach for special occasions, our team 
           ensures you get the best options and a hassle-free booking experience. Let us handle your road transportation, 
           so you can enjoy a smooth and stress-free journey. Discover more at Traventura!"
           
          img1={BusImg}
          img2={CarImg} 
           
           />

       </div>

       

       

    );
}

export default Destination