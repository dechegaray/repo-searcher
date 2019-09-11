import axios from 'axios';

const CLIENT_ID = "Iv1.27346c164df936f5";
const CLIENT_SECRET = "cbeec094e43747264ea6ce1e3b5dd26bc94f9285";
const API_URL = "https://api.github.com";
const API_AUTH_PARAMS = `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

export async function fetchAsyncUserData(username)
{
    try {
        const response = await axios.get(`${API_URL}/users/${username}?${API_AUTH_PARAMS}`);
        console.log(response);
        //return response;
    } catch (error) {
        //throw new Error(error);
        console.error(error);
    }
}

export function fetchUserData(username)
{
    return axios.get(`${API_URL}/users/${username}?${API_AUTH_PARAMS}`);
}

export function fetchUserRepos(username)
{
    return axios.get(`${API_URL}/users/${username}/repos?${API_AUTH_PARAMS}`);
}