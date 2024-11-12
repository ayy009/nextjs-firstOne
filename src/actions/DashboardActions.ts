// import axios from "axios";
// const apiKey = process.env.API_key;

// export default async function GetAllData() {
//   try {
//     // Fetch data from an external API using axios
//     const response = await axios.post(`http://manageservers.lwebl3ami9.store/api/Servers?api_key=fIMkFuhftT5fuVUovbUZa6A3wPG9mVqY`);
//     // const response = await axios.post(`http://manageservers.lwebl3ami9.store/api/Servers?api_key=${apiKey}`);
//     const data = response.data;
//     console.log(data);
//     console.log("-----------------------------------------");
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// }


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