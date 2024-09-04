import "./TripStyle.css";

import {FaBuilding} from 'react-icons/fa'
import {GiForkKnifeSpoon} from 'react-icons/gi'
import {FaBookOpen} from 'react-icons/fa6'
import {MdLocalHotel} from 'react-icons/md'
import {MdLunchDining} from 'react-icons/md'
import {MdEmojiTransportation} from 'react-icons/md'
import {RiDrinks2Fill} from 'react-icons/ri'
import {FaWifi} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
// import {} from 'react-icons/'
import {BsArrowRightShort} from 'react-icons/bs'

function TripData(props){
    return(
        <div className="t-card">
            <span className="discount">
                {props.discount}
            </span>
            <div className="t-image">
                <img src={props.image} alt="image"/>
                {/* <span className={props.discount}></span> */}
                {/* <span className="discount">30% off</span> */}
            </div>

            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            
           <div className="offerBody">
            <div className="price flex">
            <h4>{props.price}</h4>
            <span className="status">
                    {props.status}
                </span>
            </div>
            <div className="amenities flex">
                <div className="singleAmenity flex">
                    <FaBuilding className="icon" />
                    <small>{props.accommodation}</small>
                </div>
                <div className="singleAmenity flex">
                    <GiForkKnifeSpoon className="icon" />
                    <small>{props.breakfast}</small>
                </div>
                <div className="singleAmenity flex">
                    <FaBookOpen className="icon" />
                    <small>{props.guide}</small>
                </div>
                <div className="singleAmenity flex">
                    <MdLunchDining className="icon" />
                    <small>{props.lunch}</small>
                </div>
                <div className="singleAmenity flex">
                    <MdEmojiTransportation className="icon" />
                    <small>{props.transport}</small>
                </div>
                <div className="singleAmenity flex">
                    <RiDrinks2Fill className="icon" />
                    <small>{props.welcomeDrink}</small>
                </div>
            </div>
            <div className="location flex">
                <MdLocationOn className="icon" />
                <small>{props.location}</small>
            </div>

           </div>

           <button className="show">
                <a href="/" className="">
                    {props.buttonText} 
                    <BsArrowRightShort className="icon" />
                </a>
            </button>
        </div>
    );
}

export default TripData;