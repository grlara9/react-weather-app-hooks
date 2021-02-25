import React from 'react';
import './App.css';
import Forecast from './Components/Forecast/Forecast';
import ForecastList from './Utils/ForecastList'
import UseFetch from './Utils/useFetch';

function App() {

  const {data, error, isLoading, setUrl} = UseFetch();

  const getContent = () => {
    if(error) return <h2>Error when fetching: {error}</h2>
    if(!data && isLoading) return <h2>LOADING...</h2>
    if(!data) return null;
    return <ForecastList weathers={data.list} />
  };

  return (
    <div className="App">
      <Forecast />

     
    </div>
  );
}

export default App;
