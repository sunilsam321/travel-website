import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import ContactImg from '../images/cont2.jpg'

function Contact (){
    return(

        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact Us"
       
        btnClass="hide"
        />
          <ContactForm/>
          <Footer/>
        </>
    )
}

export default Contact;