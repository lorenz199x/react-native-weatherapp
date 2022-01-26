import axios from 'axios';

export const getWeather = async (query) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${query},uk&APPID=7dc61b35bf026c5a070976879906957e`,
    );

    console.log(response.data)
    return response.data
  } catch (error) {
    // handle error
    // alert(error.message);
  }
}