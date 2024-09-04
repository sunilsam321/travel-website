import "./FooterStyle.css"
import TravenLogo from "../images/traven0.jpg"


const Footer =() =>{
    return(
        
        <div className="footer">

            <div className="t-footer">
                <div className="footer-container">
                    <div className="three-container">

                    <div className="left">
               
                <div>
                <img alt="img" src={TravenLogo}/> 
                    {/* <h1>Traventura</h1> */}
                    <p>A Unit of Vedant Asset Ltd,<br></br>
                        3rd Floor Gayways House<br></br>
                        Pe Pee Compound, Ranchi Jharkhand
                        Pin - 834001.
                    </p>
              
                <br></br>
          
                
                {/* <div> */}

                    <a href="tel:+919304955502">+91 9304955502</a>
                    <br></br>
                    <a href="tel:+919263855103">+91 9263855103</a>
                    <br></br>
                    <a href="mailto:support@traventura.in">support@traventura.in</a>
                    
                    
                    
                    </div>
                </div>


                <div className="center">

                    <div>
                        <h4>Navigation</h4>
                        <br></br>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                        <a href="/service">Services</a>
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/terms">Terms & Conditions</a>
            </div>
        </div>

          <div className="right">
                    <div>
                        <h4>Community</h4>
                        <br></br>
                        <ul>
                        <li><a href="https://www.facebook.com/traventuratravel">
                            <i className="fa-brands fa-facebook-square"></i>
                        </a></li>
                        <li><a href="https://twitter.com/traventura">
                            <i className="fa-brands fa-twitter-square"></i>
                        </a></li>
                        <li><a href="/">
                            <i className="fa-brands fa-linkedin"></i>
                        </a></li>
                        <li><a href="https://www.instagram.com/traventuratravel">
                            <i className="fa-brands fa-instagram-square"></i>
                        </a></li>

                        </ul>
                    </div>
                
        </div>
         

                    </div>

                </div>
            </div>
            
                {/* <div className="back-image"> */}
                    {/* <img alt="back-img" src={Traven3Img}/> */}

           

                
         

                  
            {/* </div> */}
        </div>

    );
}

export default Footer;