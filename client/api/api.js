import axios from 'axios'

export const API_URL = 'http://localhost:3000/api'


export async function get(url) {
    const response = await axios.get(API_URL + url)
    return response.data
}
