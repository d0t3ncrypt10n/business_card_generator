# Installation Instructions

## Quick Start

Follow these steps to get the application running on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Git** - [Download](https://git-scm.com/)
- **npm** or **yarn** (comes with Node.js)

## Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/business-card-generator.git
cd business-card-generator
```

## Step 2: Backend Setup

### Install Dependencies

```bash
cd Backend
npm install
```

This will install all required packages including:
- express
- mongoose
- bcryptjs
- jsonwebtoken
- cors
- dotenv
- multer
- qrcode
- helmet (NEW - security headers)
- express-mongo-sanitize (NEW - MongoDB injection prevention)

### Create Environment File

```bash
cp .env.example .env
```

### Edit .env File

Open `.env` and configure:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/business-card-db
JWT_SECRET=your_super_secret_jwt_key_min_32_characters_long
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

**Important:**
- Change `JWT_SECRET` to a strong random string (minimum 32 characters)
- If using MongoDB Atlas, replace `MONGODB_URI` with your connection string
- Keep `FRONTEND_URL` as is for local development

### Create Uploads Directory

```bash
mkdir uploads
```

### Start Backend Server

```bash
npm run dev
```

You should see:
```
🚀 Server running in development mode on port 5000
MongoDB Connected: localhost
```

## Step 3: Frontend Setup

Open a new terminal window/tab:

### Install Dependencies

```bash
cd Frontend
npm install
```

This will install all required packages including:
- react
- react-dom
- react-router-dom
- axios
- qrcode
- html2canvas
- jspdf
- vite

### Create Environment File (Optional)

```bash
cp .env.example .env
```

The default API URL is `http://localhost:5000/api`. Only create `.env` if you need to change this.

### Start Frontend Server

```bash
npm run dev
```

You should see:
```
VITE v7.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

## Step 4: Access the Application

Open your browser and navigate to:

```
http://localhost:5173
```

You should see the home page of the Digital Business Card Generator!

## Step 5: Test the Application

1. **Register a new account**
   - Click "Get Started" or "Register"
   - Fill in your details
   - Click "Create Account"

2. **Create a business card**
   - You'll be redirected to the dashboard
   - Click "Create New Card"
   - Fill in your information
   - Upload a profile image (optional)
   - Customize colors and fonts
   - Click "Create Business Card"

3. **View your card**
   - Go back to dashboard
   - Click "View" on your card
   - See the public view with QR code
   - Try downloading as PNG or PDF

## Troubleshooting

### Backend Issues

**MongoDB Connection Error**
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
Solution: Make sure MongoDB is running
```bash
# macOS
brew services start mongodb-community

# Windows
net start MongoDB

# Linux
sudo systemctl start mongod
```

**Port Already in Use**
```
Error: listen EADDRINUSE: address already in use :::5000
```
Solution: Change PORT in `.env` or kill the process using port 5000

**JWT_SECRET Not Set**
```
Error: JWT_SECRET is not defined
```
Solution: Make sure `.env` file exists and has JWT_SECRET set

### Frontend Issues

**API Connection Error**
```
Network Error or CORS Error
```
Solution: 
1. Make sure backend is running on port 5000
2. Check FRONTEND_URL in backend `.env`
3. Clear browser cache

**Module Not Found**
```
Error: Cannot find module 'xyz'
```
Solution: Delete `node_modules` and reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

### Database Issues

**Authentication Failed**
```
MongoServerError: Authentication failed
```
Solution: Check your MongoDB credentials in MONGODB_URI

**Database Not Found**
```
Database 'business-card-db' not found
```
Solution: MongoDB will create it automatically on first use. Just make sure MongoDB is running.

## MongoDB Setup Options

### Option 1: Local MongoDB

1. Install MongoDB Community Edition
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/business-card-db`

### Option 2: MongoDB Atlas (Cloud)

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create database user
4. Whitelist your IP (or use 0.0.0.0/0 for development)
5. Get connection string
6. Replace `<password>` with your database password
7. Use in MONGODB_URI

Example Atlas connection string:
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/business-card-db?retryWrites=true&w=majority
```

## Verification Checklist

After installation, verify:

- [ ] Backend server running on port 5000
- [ ] Frontend server running on port 5173
- [ ] MongoDB connected successfully
- [ ] Can access home page
- [ ] Can register new user
- [ ] Can login
- [ ] Can create business card
- [ ] Can upload images
- [ ] Can view card
- [ ] Can download card as PNG/PDF
- [ ] QR code generates correctly

## Next Steps

1. **Explore the application**
   - Create multiple cards
   - Try different themes
   - Test all features

2. **Read the documentation**
   - [README.md](README.md) - Overview and features
   - [SECURITY.md](SECURITY.md) - Security practices
   - [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide

3. **Customize**
   - Add your own templates
   - Modify colors and styles
   - Add new features

## Getting Help

If you encounter issues:

1. Check this installation guide
2. Review [README.md](README.md)
3. Check [GitHub Issues](https://github.com/your-username/business-card-generator/issues)
4. Create a new issue with:
   - Error message
   - Steps to reproduce
   - Your environment (OS, Node version, etc.)

## Development Tips

### Hot Reload

Both frontend and backend support hot reload:
- Frontend: Changes reflect immediately
- Backend: Nodemon restarts server on file changes

### Debugging

**Backend:**
```bash
# Add console.logs in your code
console.log('Debug info:', variable);

# Check terminal for logs
```

**Frontend:**
```bash
# Use browser DevTools
# Console tab for logs
# Network tab for API calls
```

### Database GUI

Use MongoDB Compass for visual database management:
- [Download MongoDB Compass](https://www.mongodb.com/products/compass)
- Connect using your MONGODB_URI
- View and edit data visually

## Success!

If you've completed all steps successfully, you now have a fully functional Digital Business Card Generator running locally! 🎉

Happy coding! 🚀
