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
        const {data}:{data:SuperHeroes[]} = await axios.get("http://localhost:4000/superheroes")

        return data.find((data) => data.id === id)
    } catch (error) {
     console.error(error)
     throw new Error("error to fechist commets")
    }
}