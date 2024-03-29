import { useDispatch } from 'react-redux';
import { login } from '../../Redux/auth/auth-operations';
import LoginForm from '../../components/LoginForm/LoginForm';
import css from './loginPage.module.css';

const LoginPage = () => {
    const dispatch = useDispatch();

    const handleLogin = data => {
        dispatch(login(data));
    };

    return (
        <div className={css.loginpage_wrap}>
        <LoginForm onSubmit={handleLogin} />
        </div>
    );
};

export default LoginPage;
