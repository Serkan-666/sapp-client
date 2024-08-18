import React from 'react';
import { Select, MenuItem, FormControl } from '@mui/material';
import { useLanguageContext } from 'contexts/LanguageContext';

const LanguageSelect = () => {
   const { language, toggleLanguage } = useLanguageContext();

   const handleChange = (event) => {
      toggleLanguage(event.target.value);
   };

   return (
      <FormControl variant="outlined" fullWidth>
         <Select
            sx={{
               height: 36.5,
            }}
            id="language-select"
            size="small"
            value={language}
            onChange={handleChange}
         >
            <MenuItem value="tr">Türkçe</MenuItem>
            <MenuItem value="en">English</MenuItem>
         </Select>
      </FormControl>
   );
};

export default LanguageSelect;
