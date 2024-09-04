import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Trip from '../components/Trip'
import PackageImg from '../images/summer.jpg'

function Packages (){
    return(

        <>
        <Navbar/>
           
        <Hero
        cName="hero-mid"
        heroImg={PackageImg}
        title="Packages"
       
        btnClass="hide"

        /> 
           <Trip/>
          <Footer/>
        </>
    )
}

export default Packages;