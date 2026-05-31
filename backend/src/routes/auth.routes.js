import express from 'express';
const router = express.Router();

// Route POST /api/auth/login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Giả lập thông tin đăng nhập đơn giản
  if (username === 'admin' && password === 'password123') {
    return res.status(200).json({
      message: 'Đăng nhập thành công',
      token: 'mock-jwt-token-for-future-r-intern-practice',
    });
  }

  return res.status(401).json({
    message: 'Tên đăng nhập hoặc mật khẩu không đúng.',
  });
});

export default router;
