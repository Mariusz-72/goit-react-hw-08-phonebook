import UseForm from '../../shared/hooks/useForm';
import initialState from './initialState';
import FormField from '../../shared/API/components/formField';
import fields from './fields';
import css from './LoginForm.module.css';
import Button from '../../shared/button/button';



const LoginForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = UseForm({
        initialState,
        onSubmit,
    });
    const { email, password } = state;

    return (
      <div>
        <div className={css.loginpage_wrap}>
          <h2 className={css.loginpage_title}>Enter your account</h2>
        </div>
        <form onSubmit={handleSubmit} className={css.form}>
          <FormField
            value={email}
            handleChange={handleChange}
            {...fields.email}
          />
          <div className={css.iconInput_wrap}>
            <FormField
              value={password}
              handleChange={handleChange}
              {...fields.password}
            />
          </div>
          <div>
            <Button className={css.button_signin}> Sign in </Button>
          </div>
        </form>
      </div>
    );
};

export default LoginForm;
