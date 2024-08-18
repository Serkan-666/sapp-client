import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const CustomSelect = ({ value, setValue, data }) => {
   const handleChange = (event) => {
      setValue(event.target.value);
   };

   return (
      <FormControl variant="outlined" fullWidth>
         <InputLabel id="language-select-label">Select Language</InputLabel>
         <Select
            labelId="language-select-label"
            id="language-select"
            value={value}
            onChange={handleChange}
            label="Select Language"
         >
            {data.map((item, index) => (
               <MenuItem value={item.value}>{item.name}</MenuItem>
            ))}
         </Select>
      </FormControl>
   );
};

export default CustomSelect;
