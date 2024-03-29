import UseForm from '../../shared/hooks/useForm';
import initialState from './initialState';
import FormField from '../../shared/API/components/formField';
import fields from './fields';

import Button from '../../shared/button/button';

import css from './registerForm.module.css';

const RegisterForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = UseForm({
        initialState,
        onSubmit,
    });
    const { name, email, password } = state;

    return (
        <div className={css.homepage_wrap}>
        <div className={css.title_wrap}>
            <h2 className={css.homepage_title}>Create account</h2>
        </div>

        <form onSubmit={handleSubmit} className={css.form}>
            <FormField value={name} handleChange={handleChange} {...fields.name} />
            <FormField
            value={email}
            handleChange={handleChange}
            {...fields.email}
            />
            <div>
            <FormField
                value={password}
                handleChange={handleChange}
                {...fields.password}
            />
            </div>
            <div className={css.button_wrap}>
            <Button> Register </Button>
            </div>
        </form>
        </div>
    );
};

export default RegisterForm;
