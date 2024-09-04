import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
// import Flight from '../components/Flight'

import HotelImg from '../images/traven16.jpg'

function Hotel (){
    return(

        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={HotelImg}
        title="Hotels"
       
        btnClass="hide"
        
        />

       {/* <Flight/> */}
          
          <Footer/>
        </>
    )
}

export default Hotel;