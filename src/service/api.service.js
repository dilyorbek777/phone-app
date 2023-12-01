
import axios from "axios"
const baseURI = 'http://127.0.0.1:8000/products/lastmodel/'

export const ApiService = {
    async fetching() {
        const response = await axios.get(baseURI)
        return response.data[0]
     }
}

