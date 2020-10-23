import React from 'react'
import './form.css'
const Form = (props) => {

    const inputTextHandler = (e)=>{
        props.setInputText(e.target.value)
    }
    return (
        <form onSubmit={props.getWeather}>
            <input  
                name="city" 
                type="text"   
                onChange={inputTextHandler}
                placeholder="Search by city..." />
            <button>Search</button>
        </form>
    )
}
export default Form