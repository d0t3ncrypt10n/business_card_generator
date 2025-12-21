import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import cardRoutes from './routes/cardRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import { generateQRCode } from './utils/generateQR.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Security middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" },
  crossOriginEmbedderPolicy: false
}));
app.use(mongoSanitize());

// CORS configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Body parser middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Static files
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/cards', cardRoutes);
app.use('/api/upload', uploadRoutes);

// QR Code generation endpoint
app.get('/api/qrcode/:cardId', async (req, res) => {
  try {
    const cardUrl = `${process.env.FRONTEND_URL}/card/${req.params.cardId}`;
    const qrCode = await generateQRCode(cardUrl);
    res.json({ qrCode });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Business Card API is running',
    version: '1.0.0',
    status: 'healthy'
  });
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Error handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  server.close(() => process.exit(1));
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

export default app;
