import axios from 'api/axios';

const fetchGetFunction = async (url) => {
   try {
      const res = await axios.get(url);
      return res.data;
   } catch (error) {
      throw error;
   }
};

const fetchPostFunction = async (url, data) => {
   try {
      const res = await axios.post(url, data);
      return res.data;
   } catch (error) {
      throw error;
   }
};

export { fetchGetFunction, fetchPostFunction };
