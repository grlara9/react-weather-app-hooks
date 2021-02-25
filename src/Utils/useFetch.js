import {useState, useEffect} from 'react';
import axios from 'axios'

const UseFetch = (initialUrl) => {
  // create state variables
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [url, setUrl] = useState(initialUrl);
  const KEY_API="fd65dfc39c19c48cf92e9b8454d0686d";


  useEffect(() => {
    if(!url) return;
    setIsLoading(true);
    // clear old search
    setData(null);
    setError(null);

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            console.log("this is the position of the new" + position.coords.latitude + position.coords.longitude)
    
            const api =`http://api.openweathermap.org/data/2.5/forecast?lat=${ position.coords.latitude}&lon=${position.coords.longitude}&appid=${KEY_API}`
    axios.get(api)
       
        .then((data) => {
                console.log("hiodsdcn" + data)
            // error handling for nonexistent data
            setIsLoading(false);
            if(data.cod >= 400) {
                setError(data.message);
                return;
            }
            setData(data);
        })
        .catch((error) => {
            setIsLoading(false);
            setError(error);
        });
    })
}
  },

  [url]);

  return { data, error, isLoading, setUrl };
};

export default UseFetch;