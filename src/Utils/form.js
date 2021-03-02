import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './form.css'
const Form = (props) => {

    const inputTextHandler = (e)=>{
        props.setInputText(e.target.value)
    }
    return (
        <form onSubmit={props.getWeather, props.getForecast}>
            <input  
                name="city" 
                type="text"   
                onChange={inputTextHandler}
                placeholder="Search by city..." />
            <button><SearchIcon /></button>
        </form>
    )
}
export default Form