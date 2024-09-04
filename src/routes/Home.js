import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Destination from '../components/Destination'
import Choose from '../components/Choose'
import Footer from '../components/Footer'
import HeroImg from '../images/traven3.png'

import Search from '../components/Search'

import Testimonial from '../components/Testimonial'


function Home (){
    return(

        <>
        <Navbar/>

        <Hero
        
        cName="hero-mid"
        heroImg={HeroImg}
        title="Create Ever-lasting Memories With Us"
        text="Choose Your Favourite Destination."
        buttonText="Travel Packages"
        url="/package"
        btnClass="show"
        
        />
        <Search/>
        <Destination/>
        <Choose/>
        <Testimonial/>
        <Footer/>

        </>
    )
}

export default Home;