import axios from "axios";

axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency';

const userCount = 6;
export const getUsers = async page => {
    try {
        const { data } = await axios.get(`/api/v1/users?page=${page}&count=${userCount}`)
        console.log(data);
        return data.users;
    } catch (error) {
        console.log(error);
    }
}