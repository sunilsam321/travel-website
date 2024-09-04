import JetImg from "../assets/jet1.jpg"
import Jet2Img from "../assets/jet2.jpg"

import Itinerary from "./Itinerary"

const ItineraryData = () =>{
    return(

        
           


        <div className="itinerary">
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
     </div>



);
}

export default ItineraryData