import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL
const apiKey = process.env.REACT_APP_API_KEY

const getHeaders = async () => {
    const headers = {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
    };
    return headers;
};

export const post = async (destination, body) => {
    try {
        const headers = await getHeaders();
        let config = {
            method: 'post',
            url: `${apiUrl}${destination}`,
            headers: headers,
            data: JSON.stringify(body),
        }
        const result = await axios(config);
        if (result.status === 200) {
            console.log('[post] result ', result);
            const returnResponse = result.data
            return returnResponse
        } else {
            return { error: result.status };
        }
    } catch (err) {
        throw err
    }
}

export const get = async (destination, params) => {
    try {
        const headers = await getHeaders();
        let config = {
            method: 'get',
            url: destination,
            headers: headers,
            params: params,
        };
        const result = await axios(config);
        if (result.status === 200) {
            console.log('[get] result ', result);
            const returnResponse = result.data
            return returnResponse
        } else {
            return { error: result.status };
        }
    } catch (err) {
        throw err;
    }
};