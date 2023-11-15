import axios from "axios";

const BASE_URL= 'https://youtube138.p.rapidapi.com';

const options = {
   
    params: {
     hl:"en",gl:"US"
        
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_YOUWEB_API_KEY,
    
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }

  };
  console.log();


  export const fetchDataFromApi = async (url) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/${url}`, options);
      return data;
  console.log(url);


    } catch (error) {
      if (error.response && error.response.status === 429) {
        // Handle rate limiting here (similar to previous example)
        const retryAfterSeconds = 5;
        console.log(`Rate limited. Retrying in ${retryAfterSeconds} seconds...`);
        await new Promise((resolve) => setTimeout(resolve, retryAfterSeconds * 1000));
        return fetchDataFromApi(url); // Retry the request
      }
  
      console.error('Error:', error.message);
      throw error;
    }
  };