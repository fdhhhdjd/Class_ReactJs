import { createContext, useContext, useReducer, useEffect } from 'react';

const initialState = { auth: JSON.parse(localStorage.getItem('auth')) || false };

const authContext = createContext(initialState);

export function reducer(state, action) {
  switch (action.type) {
    case 'login':
      localStorage.setItem('auth', JSON.stringify(true));
      return { auth: true };
    case 'logout':
      localStorage.setItem('auth', JSON.stringify(false));
      return { auth: false };
    default:
      throw new Error();
  }
}

export function AuthProvider({ children }) {
  const [authed, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Lưu trạng thái xác thực vào localStorage mỗi khi thay đổi
    localStorage.setItem('auth', JSON.stringify(authed.auth));
  }, [authed.auth]);

  return <authContext.Provider value={[authed, dispatch]}>{children}</authContext.Provider>;
}

export default function useAuth() {
  return useContext(authContext);
}
