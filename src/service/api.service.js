
import axios from "axios"
const baseURI = 'https://fakestoreapi.com/products'

export const ApiService = {
    async fetching() {
        const response = await axios.get(baseURI)
        return response.data
     }
}