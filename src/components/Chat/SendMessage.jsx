import { useVolumeContext } from 'contexts/VolumeContext';
import AppTextField from 'components/Inputs/AppTextField';
import { fetchPostFunction } from 'utils/fetchFunctions';
import { Box, Button, Divider } from '@mui/material';
import sound from '../../assets/sounds/send.mp3';
import { Formik, Form, Field } from 'formik';
import { Send } from '@mui/icons-material';
import { useIntl } from 'react-intl';
import { Howl } from 'howler';
import React from 'react';
const notificationSound = new Howl({
   src: [sound],
});

export default function SendMessage({ username }) {
   const { formatMessage } = useIntl();

   const { mode } = useVolumeContext();
   const handleSubmit = async (values, { resetForm }) => {
      try {
         if (values.message !== '') {
            await fetchPostFunction('/message/send', { username, content: values.message });
            if (mode === 'on') {
               notificationSound.play();
            }
            resetForm();
         }
      } catch (error) {
         console.error('Submit error:', error);
      }
   };
   return (
      <Box>
         <Divider />
         <Formik initialValues={{ message: '' }} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
               <Form noValidate autoComplete="off">
                  <Box
                     sx={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: 'background.default',
                     }}
                  >
                     <Field
                        as={AppTextField}
                        fullWidth
                        placeholder={formatMessage({ id: 'common.input' })}
                        name="message"
                        variant="standard"
                        sx={{
                           px: 2,
                           py: 2,
                           fontSize: 18,
                        }}
                     />
                     <Box sx={{ pr: 1 }}>
                        <Button
                           type="submit"
                           disabled={isSubmitting}
                           sx={{
                              color: 'primary.main',
                              '&:hover': { backgroundColor: 'transparent' },
                           }}
                        >
                           <Send />
                        </Button>
                     </Box>
                  </Box>
               </Form>
            )}
         </Formik>
      </Box>
   );
}
