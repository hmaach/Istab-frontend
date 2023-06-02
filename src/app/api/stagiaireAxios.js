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


export const updateProfilePicture = async (id, file, token) => {
  try {
    console.log('handleSaveProfilePicture called'); // Log that the function is being called
    console.log('ID:', id); // Log the ID parameter
    console.log('File:', file); // Log the file parameter

    const formData = new FormData();
    formData.append('profile_picture', file);

    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    };

    const response = await api.post(`/stagiaire/${id}`, formData, { headers });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


