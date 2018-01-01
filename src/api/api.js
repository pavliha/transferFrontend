import axios from 'axios'
import JWT from 'jwt-decode'
import urlencodeForm from "../services/urlencodeForm";

export const API_URL = 'https://transfer-api.herokuapp.com'


export async function get(url) {
    const response = await axios.get(API_URL + url)
    return response.data
}

export async function post(url, data) {
    const response = await axios.post(API_URL + url, data)
    return response.data
}

export async function registerUser(form) {

    form = urlencodeForm(form)

    const data = await post('/register', form)

    return JWT(data.token).data
}