import React from 'react'

const Form = (props) => {
    return (
        <form className="mt-2" onSubmit={getWeather}>
            <div className="row">
                <div className="col">
                    <input onChange={(e) => setQuery(e.target.value)} 
                    name="city" 
                    type="text"   
                    placeholder="Search by city..." />
                </div>
                <button className="btn btn-warning">Get Weather</button>
            </div>
        </form>
    )
}
export default Form