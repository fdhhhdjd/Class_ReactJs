import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../Redux/Actions';
import { Contents, Login, Register } from '../import';
import { auth } from '../utils/Firebase';

const Auth = () => {
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  const handleFlag = () => {
    setFlag(!flag);
  };
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);
  return (
    <>
      <div className={`container1 ${flag ? 'sign-up-mode' : ''}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <Login handleFlag={handleFlag} flag={flag} />
            <Register />
          </div>
          <Contents handleFlag={handleFlag} flag={flag} />
        </div>
      </div>
    </>
  );
};

export default Auth;
