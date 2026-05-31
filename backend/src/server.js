import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Root API Endpoint
app.get('/', (req, res) => {
  res.json({ message: 'API Backend hoạt động bình thường.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
