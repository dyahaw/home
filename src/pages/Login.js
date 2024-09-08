import React from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    // Logika yang akan dijalankan saat tombol login ditekan
    console.log('Tombol Login ditekan');
    // Redirect ke halaman dashboard atau halaman lain
    router.push('/team');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
