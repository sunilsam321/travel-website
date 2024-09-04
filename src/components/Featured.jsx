import { useState } from 'react'
import { FaPlaneDeparture} from 'react-icons/fa'
import { FaHotel} from 'react-icons/fa6'



const [active, SetActive] = useState(false);

const Card = ({packages, image, country, amount, rows }) => {
    const [ divColor, setDivColor] = useState({
        bgColor: "",
        textColor: "",
    });

    return (
        <div className="relative overflow-hidden my-0 mx-auto rounded-2*1" 
        style={{gridRow: 'span${rows} / span${rows}'}} 
        onMouseEnter={() =>
            setDivColor({bgColor: '#6347F9', textColor:'white'})
        }
        onMouseLeave={() =>
            setDivColor({bgColor: 'white', textColor:'#6347F9'})
        }>
            <div className="bg-white text-primary h-12 px-4 rounded-md absolute top-4 right-4 z-10 font-bold flex flex-col items-center justify-center text-lg"
                style={{
                    backgroundColor: '${divColor.bgColor}',
                    color: '${divColor.textColor}',
                }}
            >
            {packages} Packages
            </div>
            <img 
            src={image} 
            alt=""
            className="h-full w-full rounded-2*1 hoverImg" 
            />
            <div className="absolute bottom-4 left-4">
                <h2 className="text-white text-4*1 font-bold">{country}</h2>
                <p className="text-white">Starting from ${amount}</p>
            </div>

        </div>
    );
};
return (
    <div className=" max-w[1400px] mx-auto relative">
        <div className="w-full h-full">
            <p className="xl:text-[25rem] lg:text-[20rem] absolute top-0 left-0 w-full text-center z-[-1] text-gray font-semibold opacity-10">
                Travel</p>
        </div>
        <div className="px-3 lg:mt-0 mt-12">
            <div className="bg-white shadow-xl py-10 relative -top-16 z-10">
                <div className="flex lg:gap-x-4 gap-x-2 absolute -top-14">
                    <button onClick={() => SetActive('Flight')}>
                        <FaPlaneDeparture size={20}/>
                    Flight</button>
                    <button onClick={() => SetActive('Hotel')} className={'rounded-sm flex gap-x-2 items-center justify-center focus:outline-none border-none h-14'
                        active === "Hotel" ? "bg-primary text-white" : "bg-white"
                        '}'}>
                        <FaHotel size={20}/>
                    Hotel</button>
                </div>
            </div>
        </div>
    </div>
)
































export default Featured