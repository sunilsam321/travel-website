import "./TripStyle.css";
import TripData from "./TripData";
import RussiaImg from "../images/Russia.jpg"
import ThailandImg from "../images/Thailand.jpg"
import Traven2Img from "../images/traven2.png"
import Traven4Img from "../images/traven4.png"
import Traven5Img from "../images/traven5.png"
import TravenImg from "../images/traven8.png"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>

            <div className="tripcard">
                <TripData

                    image={RussiaImg}
                    discount="4 Nights 5 Days"
                    heading="Trip in Indonesia"
                    text="Bali Swings, the perfect setup for your dream picture, is a fascinating place that attracts 
                    thousands of tourists from all over the world. Secured by safety harnesses, you get to swing at roughly
                    40 meters above the ground looking over rice paddy fields and jungle views,u swing with your partner to capture the best moments in Bali."

                    price="INR 25,500/-"
                    status="Inclusions"
                    accommodation="Accommodation"
                    breakfast="Breakfast"
                    guide="Guide"
                    lunch="Lunch"
                    transport="Transport"
                    welcomeDrink="Welcome Drink"
                    location="Bali Indonesia Pataya"
                    buttonText="Explore"
                    url="/"
                    btnClass="show"


                />

                <TripData

                    image={ThailandImg}
                    discount="2 Nights 3 Days"
                    heading="Trip in Thailand"
                    text="Embark on a breathtaking 22-day adventure through Indonesia, a captivating archipelago that promises a kaleidoscope 
                    of experiences, cultures, and landscapes. This immersive Indonesia tour will take you through the enchanting islands of Bali, 
                    Lombok, and Java, each offering its unique blend of natural beauty."

                    price="INR 15,000/-"
                    status="Inclusions"
                    accommodation="Accommodation"
                    breakfast="Breakfast"
                    guide="Guide"
                    lunch="Lunch"
                    transport="Transport"
                    welcomeDrink="Welcome Drink"
                    location="Pattaya Thiland"
                    buttonText="Explore"
                    url="/"
                    btnClass="show"

                />

                  <TripData

                    image={TravenImg}
                    discount="5 Nights 6 Days"
                    heading="Trip in Shimla"
                    text="Shimla is the capital of Himachal Pradesh and a popular hill-station among Indian families and honeymooners. Situated 
                    at the height of 2200m, it was the summer capital of British India. The hill station still retains its old-world charm with 
                    beautiful colonial architecture, pedestrian-friendly."

                    price="INR 18,000/-"
                    status="Inclusions"
                    accommodation="Accommodation"
                    breakfast="Breakfast"
                    guide="Guide"
                    lunch="Lunch"
                    transport="Transport"
                    welcomeDrink="Welcome Drink"
                    location="Kullu Manali Shimala"
                    buttonText="Explore"
                    url="/"
                    btnClass="show"


                />
        </div>

                 <div className="tripcard">

                <TripData

                    image={Traven2Img}
                    discount="4 Nights 5 Days"
                    heading="Trip in Goa"
                    text="Bali Swings, the perfect setup for your dream picture, is a fascinating place that attracts 
                    thousands of tourists from all over the world. Secured by safety harnesses, you get to swing at roughly
                    40 meters above the ground looking over rice paddy fields and jungle views,u swing with your partner to capture the best moments in Bali."


                    price="INR 12,000/-"
                    status="Inclusions"
                    accommodation="Accommodation"
                    breakfast="Breakfast"
                    guide="Guide"
                    lunch="Lunch"
                    transport="Transport"
                    welcomeDrink="Welcome Drink"
                    location="North Goa"
                    buttonText="Explore"
                    url="/"
                    btnClass="show"
                />

                <TripData

                    image={Traven4Img}
                    discount="3 Nights 4 Days"
                    heading="Trip in Kerla"
                    text="Bali Swings, the perfect setup for your dream picture, is a fascinating place that attracts 
                    thousands of tourists from all over the world. Secured by safety harnesses, you get to swing at roughly
                    40 meters above the ground looking over rice paddy fields and jungle views,u swing with your partner to capture the best moments in Bali."

                    price="INR 5000/-"
                    status="Inclusions"
                    accommodation="Accommodation"
                    breakfast="Breakfast"
                    guide="Guide"
                    lunch="Lunch"
                    transport="Transport"
                    welcomeDrink="Welcome Drink"
                    location="Allppey Kerla"
                    buttonText="Explore"
                    url="/"
                    btnClass="show"
                />

                <TripData

                    image={Traven5Img}
                    discount="4 Nights 5 Days"
                    heading="Trip in Indonesia"
                    text="Bali Swings, the perfect setup for your dream picture, is a fascinating place that attracts 
                    thousands of tourists from all over the world. Secured by safety harnesses, you get to swing at roughly
                    40 meters above the ground looking over rice paddy fields and jungle views,u swing with your partner to capture the best moments in Bali."

                    price="INR 19,000/-"
                    status="Inclusions"
                    accommodation="Accommodation"
                    breakfast="Breakfast"
                    guide="Guide"
                    lunch="Lunch"
                    transport="Transport"
                    welcomeDrink="Welcome Drink"
                    location="Bali Indonesia Pataya"
                    buttonText="Explore"
                    url="/"
                    btnClass="show"
                />


            </div>

        </div>
    );
}

export default Trip;

