import axios from 'api/axios';

const fetchGetFunction = async (url, token) => {
   try {
      const res = await axios.get(url, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });
      return res.data;
   } catch (error) {
      throw error;
   }
};

const fetchPostFunction = async (url, data, token) => {
   try {
      const res = await axios.post(url, data, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });
      return res.data;
   } catch (error) {
      throw error;
   }
};

export { fetchGetFunction, fetchPostFunction };
