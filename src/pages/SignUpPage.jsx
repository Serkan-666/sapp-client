import { ReactComponent as SignUpSvg } from '../assets/gif/signup.svg';
import AppAuthForm from 'components/AppAuthForm/AppAuthForm';
import { fetchPostFunction } from 'utils/fetchFunctions';
import { toastError, toastSuccess } from 'utils/toast';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
   const navigate = useNavigate();

   const onSubmit = async (data, { resetForm }) => {
      try {
         await fetchPostFunction('/user/register', data);
         resetForm();
         toastSuccess('Kullanıcı oluşturma işlemi başarılı.');
         navigate('/sign-in');
      } catch (error) {
         toastError(error?.response?.data?.message || 'Bir Hata Oluştu.');
      }
   };
   return (
      <AppAuthForm
         key={2}
         onSubmit={onSubmit}
         SVG={SignUpSvg}
         langTitle={'common.signup'}
         langQuestion={'common.doHaveAccount'}
         langLink={'common.login'}
         to={'/sign-in'}
      />
   );
};

export default SignUpPage;
