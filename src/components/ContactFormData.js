import "./ContactFormStyle.css";

function ContactFormData(props){
    return(
        <div className="t-card">
            {/* <div className="t-image">
                <img src={props.image} alt="image"/>
            </div> */}

            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <iframe>{props.src}</iframe>
        </div>
    );
}

export default ContactFormData;