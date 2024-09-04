import "./ContactFormStyle.css"
// import ContactFormData from "./ContactFormData";

function ContactForm(){
        return(

            <div className="formcontainer">

           {/* <h1>Google Maps</h1> */}

                {/* <ContactFormData
                
                heading="Google Maps" */}
                {/* // text="Embark on a breathtaking 22-day adventure through Indonesia, a captivating archipelago that promises a kaleidoscope 
                // of experiences, cultures, and landscapes. This immersive Indonesia tour will take you through the enchanting islands of Bali, 
                // Lombok, and Java, each offering its unique blend of natural beauty." */}
                <iframe
                
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.9430015450234!2d85.32087087510236!3d23.
                35407947894279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1bb9499d8eb%3A0xbdd23f2e09a1ec!2sVedant
                %20Asset%20Limited%20%E2%80%94%20Financial%20Advisor%20%7C%20Mutual%20Fund%20Distributor!5e0!3m2!1sen!2sin!
                4v1710096905720!5m2!1sen!2sin" 
                width="950" height="550" style={{border:"0"}} allowfullscreen="" loading="lazy" 
                 referrerpolicy="no-referrer-when-downgrade">
               

                {/* /> */}

                 {/* <ContactFormData
                
                heading="Send a Message To Us"
                text="Embark on a breathtaking 22-day adventure through Indonesia, a captivating archipelago that promises a kaleidoscope 
                of experiences, cultures, and landscapes. This immersive Indonesia tour will take you through the enchanting islands of Bali, 
                Lombok, and Java, each offering its unique blend of natural beauty."

                /> */}

                </iframe>


                {/* <h1>Send a Message To Us</h1>
                <form>
                    <input placeholder="Enter Full Name"/>
                    <input placeholder="Enter Email Id"/>
                    <input placeholder="Enter Mobile Number"/>
                    <input placeholder="Enter Travel Date"/>
                    <input placeholder="Enter No. of Pax"/>
                    <textarea placeholder="Message" rows="8"></textarea>
                    <button>Send Message</button>
                </form> */}

<div className="contact-form">
<form>
  <label for="fname">Full name:</label><br></br>
  <input type="text" id="fname" name="fname" placeholder="Enter Full Name" required></input><br></br>
  <label for="lname">Email</label><br></br>
  <input type="text" id="lname" name="lname" placeholder="Enter Email" required></input><br></br>
<label for="phone">Mobile Number</label><br></br>
<input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required></input><br></br>
<label for="travel">Date of Travel (date and time):</label><br></br>
  <input type="datetime-local" id="travel" name="travel" required></input><br></br>
<label for="quantity">Number Of Pax (between 1 and 5):</label><br></br>
<input type="number" id="quantity" name="quantity" min="1" max="5" required></input><br></br>
<label for="w3review">Message</label><br></br>
<textarea id="w3review" name="w3review" rows="4" cols="50">
</textarea><br></br>
<input type="submit"></input>
</form>

</div>
                
            </div>

            

           

        );

}

export default ContactForm;