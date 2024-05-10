import axios from "axios";

export const getData =  async () => {
    try {
        return await axios.get("http://localhost:4000/superheroes")
    } catch (error) {
     console.error(error)
     throw new Error("error to fechist commets")
    }
}

export const getDataOne =  async (id:string) => {
    try {
        const {data}:{data:SuperHeroes} = await axios.get(`http://localhost:4000/superheroes/${id}`)
        return data
    } catch (error) {
     console.error(error)
     throw new Error("error to fechist commets")
    }
}

export const getFriends =  async () => {
    try {
        return await axios.get(`http://localhost:4000/friends`)
    } catch (error) {
     console.error(error)
     throw new Error("error to fechist commets")
    }
}