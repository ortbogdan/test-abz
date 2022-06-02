import axios from "axios";

axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency';
const page = 1;
const userCount = 6;
export const getUsers = async () => {
    try {
        const { data } = await axios.get(`/api/v1/users?page=${page}&count=${userCount}`)
        console.log(data.users);
        return data.users;
    } catch (error) {
        console.log(error);
    }
}