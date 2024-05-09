import axios from "axios";

export const getData =  async () => {
    try {
        return await axios.get("http://localhost:4000/superheroes")
    } catch (error) {
     console.error(error)
     throw new Error("error to fechist commets")
    }
}