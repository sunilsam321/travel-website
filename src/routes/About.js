import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
import AboutImg from '../images/traven9.png'

function About (){
    return(

        <>
        <Navbar/>
           
        <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
       
        btnClass="hide"

        /> 
          <AboutUs/>
          <Footer/>
        </>
    )
}

export default About;