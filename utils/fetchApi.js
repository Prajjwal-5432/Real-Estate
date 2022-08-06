import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async url => {
    const { data } = await axios.get(url, {
        headers: {
            'X-RapidAPI-Key': '7b0c1436d3msha87bd1d0f3c441bp1152dbjsn0b2aaa0e8701',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });

    return data;
}