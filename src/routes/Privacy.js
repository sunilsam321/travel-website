import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import PrivacyUs from '../components/PrivacyUs'
import PrivacyImg from '../images/traven22.jpg'

function Privacy (){
    return(

        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        hcolor="color"
        heroImg={PrivacyImg}
        title="Privacy & Policy"
        url="/privacy"
       
        btnClass="hide"
        />
        <PrivacyUs/>
          {/* <ContactForm/> */}
          <Footer/>
        </>
    )
}

export default Privacy;