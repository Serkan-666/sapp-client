export const localStorageSet = (key, value) => {
   try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
   } catch (error) {
      console.error('LocalStorage set error:', error);
   }
};

export const localStorageGet = (key) => {
   try {
      const serializedValue = localStorage.getItem(key);
      return serializedValue ? JSON.parse(serializedValue) : null;
   } catch (error) {
      console.error('LocalStorage get error:', error);
      return null;
   }
};

export const localStorageRemove = (key) => {
   try {
      localStorage.removeItem(key);
   } catch (error) {
      console.error('LocalStorage remove error:', error);
   }
};

export const localStorageClear = () => {
   try {
      localStorage.clear();
   } catch (error) {
      console.error('LocalStorage clear error:', error);
   }
};
