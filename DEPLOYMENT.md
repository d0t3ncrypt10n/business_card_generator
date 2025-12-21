# Deployment Guide

## Prerequisites

- Node.js v16 or higher
- MongoDB database (local or cloud)
- npm or yarn package manager

## Backend Deployment

### Environment Variables

Create a `.env` file in the `Backend` directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key_min_32_characters
NODE_ENV=production
FRONTEND_URL=https://your-frontend-domain.com
```

### Installation

```bash
cd Backend
npm install
```

### Production Build

```bash
npm start
```

### Deployment Platforms

#### Heroku

1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Set environment variables:
   ```bash
   heroku config:set MONGODB_URI=your_mongodb_uri
   heroku config:set JWT_SECRET=your_jwt_secret
   heroku config:set NODE_ENV=production
   heroku config:set FRONTEND_URL=your_frontend_url
   ```
5. Deploy: `git push heroku main`

#### Railway

1. Connect your GitHub repository
2. Add environment variables in Railway dashboard
3. Deploy automatically on push

#### DigitalOcean App Platform

1. Connect your repository
2. Configure environment variables
3. Set build command: `npm install`
4. Set run command: `npm start`

## Frontend Deployment

### Environment Variables

Create a `.env` file in the `Frontend` directory:

```env
VITE_API_URL=https://your-backend-domain.com/api
```

### Installation

```bash
cd Frontend
npm install
```

### Production Build

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deployment Platforms

#### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Deploy: `vercel`
4. Set environment variable in Vercel dashboard:
   - `VITE_API_URL`: Your backend API URL

#### Netlify

1. Install Netlify CLI: `npm i -g netlify-cli`
2. Login: `netlify login`
3. Build: `npm run build`
4. Deploy: `netlify deploy --prod --dir=dist`
5. Set environment variable in Netlify dashboard

#### GitHub Pages

1. Update `vite.config.js`:
   ```js
   export default defineConfig({
     base: '/your-repo-name/',
     // ... other config
   })
   ```
2. Build: `npm run build`
3. Deploy using gh-pages:
   ```bash
   npm install -g gh-pages
   gh-pages -d dist
   ```

## Database Setup

### MongoDB Atlas (Recommended)

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Create database user
4. Whitelist IP addresses (0.0.0.0/0 for all IPs)
5. Get connection string
6. Replace `<password>` with your database user password
7. Use this connection string in `MONGODB_URI`

### Local MongoDB

```bash
# Install MongoDB
# macOS
brew install mongodb-community

# Ubuntu
sudo apt-get install mongodb

# Start MongoDB
mongod
```

## Security Checklist

- [ ] Change JWT_SECRET to a strong random string (min 32 characters)
- [ ] Use HTTPS in production
- [ ] Set proper CORS origins (not wildcard *)
- [ ] Enable MongoDB authentication
- [ ] Use environment variables for all secrets
- [ ] Set secure cookie flags if using cookies
- [ ] Implement rate limiting
- [ ] Keep dependencies updated
- [ ] Use helmet for security headers (already included)
- [ ] Sanitize user inputs (already included)

## Performance Optimization

### Backend

- Enable gzip compression
- Use Redis for caching (optional)
- Implement database indexing
- Use CDN for static files

### Frontend

- Already optimized with Vite
- Images are lazy loaded
- Code splitting enabled
- Minification enabled in production

## Monitoring

### Recommended Tools

- **Backend**: PM2, New Relic, Datadog
- **Frontend**: Vercel Analytics, Google Analytics
- **Database**: MongoDB Atlas monitoring
- **Errors**: Sentry

## Backup Strategy

1. **Database**: Enable automated backups in MongoDB Atlas
2. **Files**: Backup uploads folder regularly
3. **Code**: Use Git for version control

## Scaling

### Horizontal Scaling

- Use load balancer (Nginx, AWS ELB)
- Deploy multiple backend instances
- Use session store (Redis) for authentication

### Vertical Scaling

- Increase server resources
- Optimize database queries
- Use database indexes

## Troubleshooting

### Common Issues

1. **CORS errors**: Check FRONTEND_URL in backend .env
2. **Database connection failed**: Verify MONGODB_URI
3. **Token expired**: JWT_SECRET mismatch between deployments
4. **Images not loading**: Check uploads folder permissions
5. **Build fails**: Clear node_modules and reinstall

### Logs

```bash
# Backend logs
npm start

# Frontend build logs
npm run build

# Check server logs on hosting platform
```

## Post-Deployment

1. Test all features in production
2. Monitor error logs
3. Set up automated backups
4. Configure domain and SSL
5. Set up monitoring alerts
6. Document any custom configurations

## Support

For issues or questions:
- Check GitHub Issues
- Review documentation
- Contact support team
