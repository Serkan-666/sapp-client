import { useEffect } from 'react';
import sound from '../assets/sounds/went.mp3';
import { Howl } from 'howler';
import { localStorageGet } from 'utils/localStorage';
const notificationSound = new Howl({
   src: [sound],
});
const useWebSocket = (user, setUsers, setMessages) => {
   useEffect(() => {
      const socket = new WebSocket(process.env.REACT_APP_WS_URL);

      socket.addEventListener('open', () => {
         socket.send(
            JSON.stringify({
               type: 'AUTH',
               token: user.token,
            }),
         );
         console.log('WebSocket bağlantısı açıldı.');
      });

      socket.addEventListener('message', (event) => {
         onMessage(event);
      });

      socket.addEventListener('close', () => {
         console.log('WebSocket bağlantısı kapandı.');
      });

      const onMessage = (event) => {
         try {
            const data = JSON.parse(event.data);
            if (data.type === 'AUTH') {
               updateUserActive(data.username, data.isConnected);
            }
            if (data.type === 'REGISTER') {
               updateNewUsers(data.user);
            }
            if (data.type === 'MESSAGE') {
               updateNewMessages(data.message);
            }
            console.log('Sunucudan mesaj alındı:', data);
         } catch (error) {
            console.log('error -->', error);
         }
      };
      const updateUserActive = (username, isConnected) => {
         try {
            setUsers((prev) => {
               const updatedUsers = [...prev];
               const userIndex = updatedUsers.findIndex((e) => e.username === username);
               if (userIndex !== -1) {
                  updatedUsers[userIndex].isConnected = isConnected;
               }
               return updatedUsers.sort((a, b) => b.isConnected - a.isConnected);
            });
         } catch (error) {
            console.log('error -->', error);
         }
      };

      const updateNewUsers = (newUser) => {
         try {
            setUsers((prev) => {
               const updatedUsers = [...prev, newUser];
               return updatedUsers.sort((a, b) => b.isConnected - a.isConnected);
            });
         } catch (error) {
            console.log('error -->', error);
         }
      };

      const updateNewMessages = (newMessage) => {
         const mode = localStorageGet('volume');
         try {
            if (newMessage.username !== user.username && mode === 'on') {
               notificationSound.play();
            }
            setMessages((prev) => [...prev, newMessage]);
         } catch (error) {
            console.log('error -->', error);
         }
      };

      return () => {
         socket.close();
      };
   }, [user, setUsers, setMessages]);
};

export default useWebSocket;
