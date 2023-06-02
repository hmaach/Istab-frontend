import api from "./baseURL";


export const getMyArchive = async (token) => {
    try {
            const headers = { Authorization: `Bearer ${token}` };
            const response = await api.get('/archive', {
                headers
            });
            return response.data;

    } catch (error) {
        console.log(error);
    }
};