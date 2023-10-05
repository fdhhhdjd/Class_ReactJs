import AuthConsumer from '@/hooks/useAuth';

const Login = () => {
  const [_, dispatch] = AuthConsumer();
  return (
    <h1>
      <button
        onClick={() => {
          dispatch({ type: 'login' });
        }}
      >
        Login
      </button>
    </h1>
  );
};

export default Login;
