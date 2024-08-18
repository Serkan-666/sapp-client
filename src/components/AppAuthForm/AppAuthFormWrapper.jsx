import { Box, Grid, Card, useTheme } from '@mui/material';

export default function AppAuthFormWrapper({ SVG, children }) {
   const theme = useTheme();

   return (
      <Box
         sx={{
            pb: 6,
            py: { xl: 8 },
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: 'background.paper',
         }}
      >
         <Card
            sx={{
               maxWidth: 1024,
               width: '95%',
               padding: { xs: 2, md: 8 },
               paddingLeft: { xs: 2, md: 2 },
               overflow: 'hidden',
               boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
               backgroundColor: 'background.default',
            }}
         >
            <Grid container spacing={5}>
               <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                     display: { xs: 'none', md: 'grid' },
                     width: '100%',
                     height: '100%',
                     textAlign: 'center',
                     '& svg': {
                        width: '100%',
                        height: '100%',
                        display: 'inline-block',
                        paddingRight: { xs: 0, lg: 10 },
                     },
                  }}
               >
                  <SVG fill={theme.palette.primary.main} />
               </Grid>
               <Grid item xs={12} md={6}>
                  {children}
               </Grid>
            </Grid>
         </Card>
      </Box>
   );
}
