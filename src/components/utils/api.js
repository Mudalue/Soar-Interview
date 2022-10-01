import axios from "axios";
//get user
export const getUsers = async () => {
    try {
      const data = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(data)
      return(data);
    } catch (error) {
      return(error);
    }
  };