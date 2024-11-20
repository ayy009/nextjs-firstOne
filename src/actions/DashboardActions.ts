
import axios from "axios";

export async function GetAllData() {
  try {
    const response = await axios.post(`http://manageservers.lwebl3ami9.store/api/Servers?api_key=fIMkFuhftT5fuVUovbUZa6A3wPG9mVqY`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}