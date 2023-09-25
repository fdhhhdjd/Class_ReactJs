import Lottie from 'react-lottie';
import { useDispatch } from 'react-redux';
import * as facebook from '../Json/facebook.json';
import { loginFacebookInitial } from '../Redux/Actions';
import '../Styles/LoginGoogleFb.css';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: facebook.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const LoginFacebook = () => {
  const dispatch = useDispatch();
  const handleLoginFB = () => {
    dispatch(loginFacebookInitial());
  };
  return (
    <>
      <div className="login  ">
        <div className="google-btn " onClick={handleLoginFB}>
          <div className="google-icon-wrapper ">
            <Lottie options={defaultOptions} />
          </div>
          <p className="btn-text">
            <b>Sign in with FaceB +</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginFacebook;
