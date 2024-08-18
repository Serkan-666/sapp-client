import LangText from 'components/LangText';
import * as yup from 'yup';

const loginRegisterValidationSchema = yup.object({
   username: yup.string().required(<LangText id="validation.usernameRequired" />),
   password: yup.string().required(<LangText id="validation.passwordRequired" />),
});

export { loginRegisterValidationSchema };
