import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import TermUs from '../components/TermUs'
import PrivacyImg from '../images/traven7.png'

function Privacy (){
    return(

        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={PrivacyImg}
        title="Terms & Conditions"
        url="/terms"
       
        btnClass="hide"
        />
        <TermUs/>
          {/* <ContactForm/> */}
          <Footer/>
        </>
    )
}

export default Privacy;