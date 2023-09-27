import Lottie from 'react-lottie';
import { useDispatch } from 'react-redux';
import * as google from '../Json/google.json';
import { loginGoogleInitial } from '../Redux/Actions';
import '../Styles/LoginGoogleFb.css';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: google.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const LoginGoogleFb = () => {
  const dispatch = useDispatch();
  const handleLoginGoogle = () => {
    dispatch(loginGoogleInitial());
  };
  return (
    <>
      <div className="login  ">
        <div className="google-btn" onClick={handleLoginGoogle}>
          <div className="google-icon-wrapper ">
            <Lottie options={defaultOptions} />
          </div>
          <p className="btn-text">
            <b>Sign in with Google +</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginGoogleFb;
