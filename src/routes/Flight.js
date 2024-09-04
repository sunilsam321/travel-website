import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

import FlightImg from '../images/traven23.jpg'

function Flight (){
    return(

        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={FlightImg}
        title="Flights"
       
        btnClass="hide"
        
        />
          
          <Footer/>
        </>
    )
}

export default Flight;