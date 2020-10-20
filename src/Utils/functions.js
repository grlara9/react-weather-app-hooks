export const convertKelvinToCelsius = (k) => {
    var celsius = Math.floor(k-273.15);
    return celsius;
  }
  export const covertToFahrenheit = (k) =>{
    var cel = k - 273;
    var far = Math.floor(cel * (9/5) + 32)
    return far;
  }