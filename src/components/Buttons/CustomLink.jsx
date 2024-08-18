import { Box } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function CustomLink({ text = 'Link', to = '/' }) {
   const location = useLocation();
   return (
      <Box
         sx={{
            fontWeight: 600,
            display: 'inline-block',
            transition: '300ms ease-in color',
            textDecoration: 'none',
            textAlign: 'center',
            color: location.pathname === to ? 'primary.main' : 'text.primary',
            px: 1.6,
            py: 1,
            '.line': {
               height: 0,
               width: 0,
               transition: '300ms ease-in all',
            },
            '&:hover': {
               color: 'primary.main',
               '.line': {
                  height: 2,
                  width: '75%',
                  backgroundColor: 'primary.main',
               },
            },
         }}
         to={to}
         component={Link}
         onClick={() => {
            console.info(`${text} linkine tıklandı yol : "${to}"`);
         }}
      >
         {text}
         <Box
            sx={{
               height: 2,
            }}
         >
            <Box className="line" />
         </Box>
      </Box>
   );
}
