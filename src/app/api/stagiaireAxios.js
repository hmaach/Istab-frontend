import api from "./baseURL";

export const getCv = async (id) => {
  try {
    const response = await api.get(`/stagiaire/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCompétences = async (id) => {
  try {
    const response = await api.get(`/stagiaire/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const updateCv = async (id, request, token) => {
  try {
    const headers = { Authorization: `Bearer ${token}` };
    const response = await api.put(`/stagiaire/${id}`, request, { headers });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateCompetences = async (id, request) => {
  try {
    const response = await api.put(`/stagiaire/${id}`, request);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


export const updateProfilePicture = async (id, file, token) => {
  try {
    const formData = new FormData();
    formData.append('profile_picture', file);

    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    };

    const response = await api.post(`/stagiaire/${id}/profile-picture`, formData, { headers });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


export const importStagiaire = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await api.post('/stagiaires/import', formData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchData = async () => {
  try {
    const response = await api.get('/stagiairesExc');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
