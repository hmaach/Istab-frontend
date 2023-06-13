import api from './baseURL'

export const getEvents = async (token = null) => {
    try {
        if (token) {
            const headers = { Authorization: `Bearer ${token}` };
            const response = await api.get('/events', {
                headers
            });
            return response.data;
        } else {
            const response = await api.get('/eventspublic');
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
};

export const PosterPost = async (post, token) => {
    try {
        const headers = { 
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
         };
        const response = await api.post('/poste', post, {
            headers
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const UpdatePost = async (post, token) => {
    try {
        const headers = { Authorization: `Bearer ${token}` };
        const response = await api.put('/poste/update', post, {
            headers
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const SupprimerPost = async (id, token) => {
    try {
        const headers = { Authorization: `Bearer ${token}` };
        const response = await api.delete(`/poste/${id}`, {
            params: { id: id },
            headers
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};