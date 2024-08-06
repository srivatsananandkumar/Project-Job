import axios from 'axios';

const fetchJobsData = async () => {
    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {
          query: 'Node.js developer in New-York,USA',
          page: '1',
          num_pages: '1',
          date_posted: 'all'
        },
        headers: {
          'x-rapidapi-key': '0184b4a73amsh36b82035ecb90b1p1c04f1jsn06322869e07f',
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
      };
    
      try {
        const response = await axios.request(options);
        console.log(response.data); // Log the response data to inspect the structure
        return response.data;
      } catch (error) {
        console.error('Error fetching data from RapidAPI:', error);
        return null;
      }
    };

export default fetchJobsData;
