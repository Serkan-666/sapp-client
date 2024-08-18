const formatTimestamp = (timestamp) => {
   const utcDate = new Date(timestamp);

   const localDate = new Date(
      utcDate.toLocaleString('en-US', {
         timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      }),
   );

   const now = new Date();
   now.setHours(0, 0, 0, 0);

   const givenDate = new Date(localDate);
   givenDate.setHours(0, 0, 0, 0);

   const diffTime = now - givenDate;
   const diffDays = diffTime / (1000 * 60 * 60 * 24);

   if (diffDays < 1) {
      // Bugün
      return `${localDate.getHours().toString().padStart(2, '0')}:${localDate.getMinutes().toString().padStart(2, '0')}`;
   } else if (diffDays < 2) {
      // Dün
      return 'dün';
   } else if (diffDays < 7) {
      // 2 gün öncesine kadar
      return `${Math.floor(diffDays)} gün önce`;
   } else if (diffDays < 14) {
      // 1 hafta öncesine kadar
      return '1 hafta önce';
   } else if (diffDays < 30) {
      // 1 ay öncesine kadar
      return '1 ay önce';
   } else {
      // 1 aydan uzun süre önce
      return `${Math.floor(diffDays / 30)} ay önce`;
   }
};

export default formatTimestamp;
