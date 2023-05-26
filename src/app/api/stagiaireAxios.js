import api from "./baseURL";

export const getCv = async (id) => {
    try {
         {
            const response = await api.get('/stagiaire', {
                params: { id : id },
            });
            return response.data;
        } 
    } catch (error) {
        console.log(error);
    }
};

export const getCompétences = async (id) => {
  try {
       {
          const response = await api.get('/stagiaire', {
              params: { id : id },
          });
          return response.data;
      } 
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



