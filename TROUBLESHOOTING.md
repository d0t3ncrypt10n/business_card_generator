# Troubleshooting Guide

## Common Issues and Solutions

### Images Not Displaying

**Symptoms:**
- Profile images show as broken links
- Images don't appear in dashboard
- Preview shows placeholder instead of image

**Solutions:**

1. **Check Backend is Running**
   ```bash
   cd Backend
   npm run dev
   ```
   Should see: `Server running on port 5000`

2. **Check Uploads Directory Exists**
   ```bash
   cd Backend
   ls uploads/
   ```
   If not exists: `mkdir uploads`

3. **Check Image Path in Database**
   - Images should be stored as: `/uploads/filename.jpg`
   - Not as full URLs

4. **Check CORS Settings**
   - Backend `.env` should have: `FRONTEND_URL=http://localhost:5173`
   - Frontend should access backend at: `http://localhost:5000`

5. **Clear Browser Cache**
   - Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)

### PublicCard Page Shows Error

**Symptoms:**
- Error boundary appears
- "Oops! Something went wrong" message
- Page crashes when viewing card

**Solutions:**

1. **Check Card ID is Valid**
   - URL should be: `http://localhost:5173/card/[valid-card-id]`
   - Card ID should exist in database

2. **Check Console for Errors**
   - Open browser DevTools (F12)
   - Look for error messages
   - Common errors:
     - "Card not found" - Invalid ID
     - "Network Error" - Backend not running
     - "Token expired" - Need to login again

3. **Verify Backend Route**
   ```bash
   # Test the public card endpoint
   curl http://localhost:5000/api/cards/public/[card-id]
   ```

4. **Check React Hooks**
   - Make sure useEffect dependencies are correct
   - Functions should be defined before useEffect

### Image Upload Fails

**Symptoms:**
- "Failed to upload image" error
- Upload button doesn't work
- Image doesn't save

**Solutions:**

1. **Check File Size**
   - Maximum: 5MB
   - Compress large images before uploading

2. **Check File Type**
   - Allowed: JPEG, JPG, PNG, GIF
   - Not allowed: BMP, TIFF, WebP, etc.

3. **Check Backend Uploads Directory**
   ```bash
   cd Backend
   ls -la uploads/
   ```
   Should have write permissions

4. **Check Multer Configuration**
   - File: `Backend/src/routes/uploadRoutes.js`
   - Should have proper storage configuration

### Authentication Issues

**Symptoms:**
- "Not authorized" errors
- Redirected to login unexpectedly
- Token expired messages

**Solutions:**

1. **Check JWT_SECRET**
   - Backend `.env` must have `JWT_SECRET` set
   - Should be at least 32 characters

2. **Check Token in localStorage**
   - Open DevTools > Application > Local Storage
   - Should see `token` key
   - If missing, login again

3. **Token Expired**
   - Tokens expire after 30 days
   - Login again to get new token

4. **Check Authorization Header**
   - Should be: `Bearer [token]`
   - Check Network tab in DevTools

### Database Connection Issues

**Symptoms:**
- "MongoDB connection failed"
- Backend crashes on startup
- "ECONNREFUSED" errors

**Solutions:**

1. **Check MongoDB is Running**
   ```bash
   # macOS
   brew services list | grep mongodb
   
   # Linux
   sudo systemctl status mongod
   
   # Windows
   net start MongoDB
   ```

2. **Check MONGODB_URI**
   - Backend `.env` should have valid connection string
   - Local: `mongodb://localhost:27017/business-card-db`
   - Atlas: `mongodb+srv://user:pass@cluster.mongodb.net/dbname`

3. **Check MongoDB Port**
   - Default: 27017
   - Make sure nothing else is using this port

4. **Check Database Permissions**
   - User should have read/write access
   - Check MongoDB logs for permission errors

### CORS Errors

**Symptoms:**
- "CORS policy" errors in console
- API calls fail from frontend
- "Access-Control-Allow-Origin" errors

**Solutions:**

1. **Check Backend CORS Configuration**
   - File: `Backend/src/server.js`
   - Should have: `app.use(cors(corsOptions))`

2. **Check FRONTEND_URL**
   - Backend `.env`: `FRONTEND_URL=http://localhost:5173`
   - Must match frontend URL exactly

3. **Check API_URL**
   - Frontend `.env`: `VITE_API_URL=http://localhost:5000/api`
   - Must match backend URL exactly

### Build Errors

**Symptoms:**
- `npm run build` fails
- Compilation errors
- Module not found errors

**Solutions:**

1. **Clear node_modules**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Check Node Version**
   ```bash
   node --version
   ```
   Should be v16 or higher

3. **Check for Syntax Errors**
   - Run: `npm run lint`
   - Fix any reported errors

4. **Check Dependencies**
   ```bash
   npm audit
   npm audit fix
   ```

### Performance Issues

**Symptoms:**
- Slow page loads
- Laggy UI
- High memory usage

**Solutions:**

1. **Optimize Images**
   - Compress images before upload
   - Use appropriate image sizes
   - Consider lazy loading

2. **Check Database Queries**
   - Add indexes to frequently queried fields
   - Limit query results

3. **Enable Production Mode**
   - Backend: `NODE_ENV=production`
   - Frontend: `npm run build`

4. **Use CDN for Static Files**
   - Move uploads to cloud storage
   - Use CDN for faster delivery

## Quick Diagnostics

### Check Everything is Running

```bash
# Check backend
curl http://localhost:5000/api/health

# Check frontend
curl http://localhost:5173

# Check MongoDB
mongosh --eval "db.adminCommand('ping')"
```

### Check Logs

**Backend Logs:**
```bash
cd Backend
npm run dev
# Watch terminal for errors
```

**Frontend Logs:**
- Open browser DevTools (F12)
- Check Console tab
- Check Network tab for failed requests

**MongoDB Logs:**
```bash
# macOS/Linux
tail -f /usr/local/var/log/mongodb/mongo.log

# Or check MongoDB Compass
```

### Reset Everything

If all else fails:

```bash
# Stop all servers
# Ctrl+C in all terminals

# Backend
cd Backend
rm -rf node_modules package-lock.json
npm install
rm -rf uploads
mkdir uploads

# Frontend
cd Frontend
rm -rf node_modules package-lock.json
npm install

# Clear browser data
# DevTools > Application > Clear storage

# Restart MongoDB
# macOS: brew services restart mongodb-community
# Linux: sudo systemctl restart mongod
# Windows: net stop MongoDB && net start MongoDB

# Start fresh
cd Backend && npm run dev
cd Frontend && npm run dev
```

## Getting Help

If you're still experiencing issues:

1. **Check Documentation**
   - [README.md](README.md)
   - [INSTALLATION.md](INSTALLATION.md)
   - [FIXES.md](FIXES.md)

2. **Search Issues**
   - Check GitHub Issues
   - Search for similar problems

3. **Create New Issue**
   - Include error messages
   - Include steps to reproduce
   - Include environment details:
     - OS
     - Node version
     - MongoDB version
     - Browser

4. **Provide Context**
   - What were you trying to do?
   - What happened instead?
   - What have you tried?

## Prevention Tips

1. **Always check logs** when something doesn't work
2. **Keep dependencies updated** regularly
3. **Use environment variables** for configuration
4. **Test after each change** to catch issues early
5. **Backup database** before major changes
6. **Use version control** (Git) to track changes
7. **Read error messages** carefully - they usually tell you what's wrong

## Contact

For additional support:
- GitHub Issues: [Create an issue](https://github.com/your-username/business-card-generator/issues)
- Email: your-email@example.com
