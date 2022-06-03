import axios from "axios";

axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

const userCount = 6;
export const getUsers = async page => {
    try {
        const { data } = await axios.get(`/users?page=${page}&count=${userCount}`)
       
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const setUser = async (user, token) => {
    console.log(user);
    try {
        const {data} = await axios.post('/users', user, { headers: {
            Token: token,
          }});
        
        return data
    } catch (error) {
        console.log(error);
    }
}

export const getPosition = async () => {
    try {
        const { data } = await axios.get('/positions');
        
        return data
    } catch (error) {
        console.log(error);
    }
}
export const getToken = async () => {
try {
    const { data } = await axios.get('/token');
    return data.token
} catch (error) {
    console.log(error);
}
}