import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerInitial } from '../Redux/Actions';
const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const passwords = useRef({});
  passwords.current = watch('password');
  const [state, setState] = useState({
    displayName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const { displayName, email, password, passwordConfirm } = state;
  const dispatch = useDispatch();
  const { current, error } = useSelector((state) => state.user);
  const history = useNavigate();
  const handleSubmitForm = (data) => {
    const { displayName, email, password } = data;
    dispatch(registerInitial(displayName, email, password));
    setState({ email: '', displayName: '', password: '', passwordConfirm: '' });
  };

  useEffect(() => {
    if (current) {
      history('/');
    }
  }, [current]);
  return (
    <>
      <form actions="" className="sign-up-form form-main" onSubmit={handleSubmit(handleSubmitForm)}>
        <h2 className="title">Sign up</h2>
        <div className="input-field">
          <i className="fas fa-user" />
          <input
            {...register('displayName', { required: true, maxLength: 15 })}
            type="text"
            placeholder="Full Name"
            name="displayName"
            id="displayName"
            // value={displayName}
            // onChange={handleChange}
          />
        </div>

        <span style={{ color: 'red' }}>
          {errors.displayName?.type === 'required' && 'Mời bạn nhập đầy đủ tên vào!'}
          {errors?.displayName?.type === 'maxLength' && 'Tên của bạn không được quá 15 kí tự'}
        </span>
        <div className="input-field">
          <i className="fas fa-envelope" />
          <input
            {...register('email', {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
            })}
            type="email"
            placeholder="Email Address"
            name="email"
            id="email"
            // value={email}
            // onChange={handleChange}
          />
        </div>
        <span style={{ color: 'red' }}>
          {errors.email?.type === 'required' && 'Mời bạn nhập Email đầy đủ! '}
          {errors?.email?.type === 'pattern' && 'Email của ban không hợp lệ!'}
          {error && 'Tài khoản của bạn đã có người đăng ký'}
        </span>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input
            {...register('password', { required: true })}
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            // value={password}
            // onChange={handleChange}
          />
        </div>
        <span style={{ color: 'red' }}>
          {errors.password?.type === 'required' && 'Mời bạn nhập đầy đủ mật khẩu. '}
        </span>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input
            {...register('passwordConfirm', {
              required: true,
              validate: (value) => value === passwords.current || 'The passwords do not match',
            })}
            type="password"
            placeholder="Confirm Password"
            name="passwordConfirm"
            id="passwordConfirm"
            // value={passwordConfirm}
            // onChange={handleChange}
          />
        </div>
        <span style={{ color: 'red' }}>
          {errors.passwordConfirm?.type === 'required' && 'Mời bạn nhập lại mật khẩu.'}
          {errors.passwordConfirm?.type === 'validate' && 'Mật khẩu nhập lại không khớp!   '}
        </span>
        <input type="submit" className="btn" name="signup" />
      </form>
    </>
  );
};

export default Register;
