import { Component } from "react";
import "./DestinationStyle.css";
// import ManaliImg from "../images/Manali.jpg"
// import LadakhImg from "../images/Ladakh.jpg"
// import GoaImg from "../images/Goa.jpg"
// import KeralaImg from "../images/Kerala.jpg"



class DestinationData extends Component{
    render(){
        return(
            

            <div className={this.props.className}>
            <div className="des-text">

                <h2>{this.props.heading}</h2>

                <p>{this.props.text}</p>

            </div>


            <div className="image">
                    <img alt="img" src={this.props.img1}/>
                    <img alt="img" src={this.props.img2}/>

                </div>

                {/* <div className="video">
                    <video src={this.props.video} muted autoPlay loop type="video/mp4" ></video>

                    </div> */}

        </div>


        );
    }


}

export default DestinationData