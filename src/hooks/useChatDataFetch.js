import { useEffect } from 'react';
import { fetchGetFunction } from 'utils/fetchFunctions';

const useChatDataGet = (setUsers, setMessages) => {
   useEffect(() => {
      const getUsers = async () => {
         try {
            const res = await fetchGetFunction('/user/getAll');
            setUsers(res);
         } catch (error) {
            console.log(error);
         }
      };

      const getMessages = async () => {
         try {
            const res = await fetchGetFunction('/message/getAll');
            setMessages(res);
         } catch (error) {
            console.log(error);
         }
      };

      getUsers();
      getMessages();
   }, [setUsers, setMessages]);
};

export default useChatDataGet;
