import React from 'react';
import Lottie from 'react-lottie';

//* JSON
import * as code from '../Json/code.json';

//* STYLE
import '../Styles/authentication.css';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: code.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
    className: 'image',
  },
};

const Forget = () => {
  return (
    <>
      <div className="container1">
        <div className="forms-container">
          <div className="signin-signup">
            <form className="sign-in-form">
              <h2 className="title">Reset Password</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Email Address" name="email" required />
              </div>
              <input type="submit" name="resetPassword" className="btn solid" />
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Forgot Password ?</h3>
              <p>You forgot the password? do not worry, I will help you now.</p>
            </div>
            <div className="image">
              <Lottie options={defaultOptions} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forget;
