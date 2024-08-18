import { loginRegisterValidationSchema } from 'utils/validations';
import AppTextField from 'components/Inputs/AppTextField';
import AppAuthFormWrapper from './AppAuthFormWrapper';
import { Box, Button } from '@mui/material';
import LangText from 'components/LangText';
import { Link } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { useIntl } from 'react-intl';

export default function AppAuthForm({ SVG, onSubmit, langTitle, langQuestion, langLink, to }) {
   const intl = useIntl();

   return (
      <AppAuthFormWrapper SVG={SVG}>
         <Box
            sx={{
               height: '100%',
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
               textAlign: 'center',
            }}
         >
            <Box
               sx={{
                  mb: { xs: 3, xl: 4 },
                  fontWeight: 700,
                  fontSize: 20,
               }}
            >
               <LangText id={langTitle} />
            </Box>

            <Formik
               validateOnChange={true}
               initialValues={{
                  username: '',
                  password: '',
               }}
               validationSchema={loginRegisterValidationSchema}
               onSubmit={onSubmit}
            >
               {({ isSubmitting }) => (
                  <Form
                     sx={{
                        textAlign: 'left',
                        marginBottom: { xs: 4, lg: 6, xl: 12 },
                     }}
                     noValidate
                     autoComplete="off"
                  >
                     <Box sx={{ mb: { xs: 2, xl: 4 } }}>
                        <AppTextField
                           placeholder={intl['common.username']}
                           label={<LangText id="common.username" />}
                           name="username"
                           variant="outlined"
                           sx={{
                              width: '100%',
                           }}
                        />
                     </Box>
                     <Box sx={{ mb: { xs: 2, xl: 4 } }}>
                        <AppTextField
                           placeholder={intl['common.password']}
                           label={<LangText id="common.password" />}
                           type="password"
                           name="password"
                           variant="outlined"
                           sx={{
                              width: '100%',
                           }}
                        />
                     </Box>

                     <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={isSubmitting}
                        sx={{
                           width: '100%',
                           height: 44,
                        }}
                     >
                        <LangText id={langTitle} />
                     </Button>
                  </Form>
               )}
            </Formik>

            <Box
               sx={{
                  color: 'grey.700',
                  fontSize: 14,
                  fontWeight: 700,
                  mt: 1,
               }}
            >
               <Box
                  component="span"
                  sx={{
                     mr: 2,
                  }}
               >
                  <LangText id={langQuestion} />
               </Box>
               <Box
                  component={Link}
                  to={to}
                  sx={{
                     color: 'primary.main',
                     cursor: 'pointer',
                     textDecoration: 'none',
                  }}
               >
                  <LangText id={langLink} />
               </Box>
            </Box>
         </Box>
      </AppAuthFormWrapper>
   );
}
