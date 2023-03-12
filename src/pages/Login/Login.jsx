import LoginRegisterForm from 'components/LoginRegisterForm/LoginRegisterForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import { selectUserName } from 'redux/auth/selectors';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUserName);

  useEffect(() => {
    if (user !== null) navigate('/contacts');
  }, [user, navigate]);

  const handleLogin = formData => {
    dispatch(logIn(formData));
  };

  return (
    <section>
      <LoginRegisterForm onSubmit={handleLogin} isLoginForm />
    </section>
  );
}
export default Login;