import axios from "axios"

const BASE_URL_PHOTOS = "https://api.unsplash.com"

export const getPhotos = () => {
    return axios.get(`${BASE_URL_PHOTOS}/photos/random`, {
        params: {
            query: 'people',
            count: 10,
            client_id: "Tja6aqE2bhqxHCiKH5cGiGCALmcjob7ka3lKnRdxrB4"
        }
    });
}

export const getApiMaps = () => {
    // Implementation pending
}