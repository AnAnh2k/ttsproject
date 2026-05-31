import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(`Đăng nhập thành công! Token: ${data.token}`);
      } else {
        setMessage(`Lỗi: ${data.message}`);
      }
    } catch (err) {
      setMessage('Không thể kết nối đến server.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Trang Đăng Nhập (Intern Task)</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Username: </label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            style={{ width: '100%', padding: '8px' }} 
            required 
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Password: </label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            style={{ width: '100%', padding: '8px' }} 
            required 
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
          Đăng nhập
        </button>
      </form>
      {message && <p style={{ marginTop: '15px', color: 'blue' }}>{message}</p>}
    </div>
  );
}

export default LoginPage;
