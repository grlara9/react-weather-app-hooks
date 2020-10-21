import React from 'react'

const Form = (props) => {

    const inputTextHandler = (e)=>{
        props.setInputText(e.target.value)
    }
    return (
        <form className="mt-2" onSubmit={props.getWeather}>
            <div className="row">
                <div className="col">
                    <input  
                    name="city" 
                    type="text"   
                    onChange={inputTextHandler}
                    placeholder="Search by city..." />
                </div>
                <button className="btn btn-warning">Get Weather</button>
            </div>
        </form>
    )
}
export default Form