import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import './SearchStyle.css'


const Search = () => {
    const [startDate, setStartDate] = useState(new Date());
    




return(


<div className="homeCard grid">
            <div className='inputContainer'>
           
            <div className="locationDiv">
                <label htmlFor="location"></label>
                <input type="text" placeholder="Dream Destination"></input>
            </div>

        

           <div className="priceDiv">
                <label htmlFor="distance"></label>
                <input type="text" placeholder="Distance"></input>
            </div>

            <div className="datePickerDiv">
            <label htmlFor="datePicker"></label>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    placeholder="dd/mm/yyyy"
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                />
        </div>

            {/* <div className="priceDiv">
                <label htmlFor="price"></label>
                <input type="text" placeholder="Price"></input>
            </div> */}
            <button ClassName ='butn'>
                Search
            </button>

            </div>

            </div>


    )
    
}  


export default Search
