import { ReactComponent as LoginSvg } from '../assets/gif/login.svg';
import AppAuthForm from 'components/AppAuthForm/AppAuthForm';
import { fetchPostFunction } from 'utils/fetchFunctions';
import { useUserContext } from 'contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { toastError } from 'utils/toast';

const SignInPage = () => {
   const navigate = useNavigate();
   const { handleLogin } = useUserContext();

   const onSubmit = async (data, { resetForm }) => {
      try {
         const res = await fetchPostFunction('/user/login', data);

         const user = {
            id: res.id,
            username: data.username,
            token: res.token,
         };

         handleLogin(user);
         resetForm();
         navigate('/');
      } catch (error) {
         toastError(error?.response?.data?.message || 'Bir Hata Oluştu.');
      }
   };
   return (
      <AppAuthForm
         key={1}
         SVG={LoginSvg}
         langLink={'common.signup'}
         to={'/sign-up'}
         langTitle={'common.login'}
         langQuestion={'common.dontHaveAccount'}
         onSubmit={onSubmit}
      />
   );
};

export default SignInPage;
