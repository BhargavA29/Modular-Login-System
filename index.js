module.exports = {
    authRoutes: require('./routes/authRoutes'),
    connectDB: require('./config/db'),
    authMiddleware: require('./middlewares/authMiddleware'),
  };
  