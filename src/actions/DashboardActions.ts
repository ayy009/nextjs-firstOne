import axios from "axios";

export default async function GetAllData() {
  try {
    // Fetch data from an external API using axios
    const response = await axios.post('http://manageservers.lwebl3ami9.store/api/Servers?api_key=onetwo');
    const data = response.data;
    console.log(data);
    console.log("-----------------------------------------");
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
