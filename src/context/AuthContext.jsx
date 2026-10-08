import { createContext, useState } from 'react';

export const AuthContext = createContext();

function AuthProvider(props) {
  const [token, setToken] = useState(
    localStorage.getItem('token')
      ? JSON.parse(localStorage.getItem('token'))
      : null,
  );

  function handleLogout() {
    setToken(null);
    localStorage.removeItem('token');
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        handleLogout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
