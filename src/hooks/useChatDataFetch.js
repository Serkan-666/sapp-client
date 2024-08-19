import { useEffect } from 'react';
import { fetchGetFunction } from 'utils/fetchFunctions';
import { toastError } from 'utils/toast';

const useChatDataGet = (user, handleLogout, setUsers, setMessages) => {
   useEffect(() => {
      const getUsers = async () => {
         try {
            const res = await fetchGetFunction('/user/getAll', user.token);
            setUsers(res);
         } catch (error) {
            if (error?.response?.data?.message === 'invalid signature') {
               toastError('Token Süreniz Doldu.');
               handleLogout();
            }
            console.log(error);
         }
      };

      const getMessages = async () => {
         try {
            const res = await fetchGetFunction('/message/getAll', user.token);
            setMessages(res);
         } catch (error) {
            if (error?.response?.data?.message === 'invalid signature') {
               toastError('Token Süreniz Doldu.');
               handleLogout();
            }
            console.log(error);
         }
      };

      getUsers();
      getMessages();
   }, [setUsers, setMessages]);
};

export default useChatDataGet;
