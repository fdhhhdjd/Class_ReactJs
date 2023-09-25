import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { useNavigate } from 'react-router-dom';
import * as loading from '../Json/Loading.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const LoadingRedirect = () => {
  const [count, setCount] = useState(5);
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(true);
      setCount((current) => --current);
    }, 1000);
    setLoading(false);
    count === 0 && history('/login');
    return () => clearInterval(interval);
  }, [count, history]);
  return (
    <div>
      <>
        <h1>Bạn hãy chờ trong {count}s</h1>
        {!loading && <Lottie options={defaultOptions} height={120} width={120} />}
      </>
    </div>
  );
};

export default LoadingRedirect;
