# 🚀 Deployment Guide - Business Card Generator

## 📦 Vercel Deployment Instructions

### Prerequisites
- GitHub account with repository access
- Vercel account (sign up at https://vercel.com)
- MongoDB Atlas database (already configured)

---

## 🎯 Part 1: Deploy Backend to Vercel

### Step 1: Login to Vercel
1. Go to https://vercel.com
2. Click "Sign Up" or "Login"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

### Step 2: Import Backend Project
1. Click "Add New..." → "Project"
2. Import your repository: `d0t3ncrypt10n/business_card_generator`
3. Vercel will detect it's a monorepo

### Step 3: Configure Backend Deployment
**Framework Preset:** Other
**Root Directory:** `Backend`
**Build Command:** Leave empty or use `npm install`
**Output Directory:** Leave empty
**Install Command:** `npm install`

### Step 4: Add Environment Variables
Click "Environment Variables" and add:

```
MONGODB_URI=mongodb+srv://d0t3ncrypt10n:Shubham%407311@cluster0.2nea4mc.mongodb.net/business_card?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=your_super_secret_jwt_key_here_change_this_in_production
PORT=5000
NODE_ENV=production
```

**Important:** Change `JWT_SECRET` to a secure random string!

### Step 5: Deploy Backend
1. Click "Deploy"
2. Wait for deployment to complete (2-3 minutes)
3. Copy your backend URL (e.g., `https://your-backend.vercel.app`)

---

## 🎨 Part 2: Deploy Frontend to Vercel

### Step 1: Update Frontend API Configuration
Before deploying frontend, update the API URL:

1. Open `Frontend/src/config/api.js`
2. Replace `BASE_URL` with your backend Vercel URL:
```javascript
export const BASE_URL = 'https://your-backend.vercel.app';
```

3. Commit and push changes:
```bash
git add Frontend/src/config/api.js
git commit -m "Update API URL for production"
git push origin main
```

### Step 2: Import Frontend Project
1. In Vercel dashboard, click "Add New..." → "Project"
2. Select the same repository: `d0t3ncrypt10n/business_card_generator`

### Step 3: Configure Frontend Deployment
**Framework Preset:** Vite
**Root Directory:** `Frontend`
**Build Command:** `npm run build`
**Output Directory:** `dist`
**Install Command:** `npm install`

### Step 4: Add Frontend Environment Variables
Click "Environment Variables" and add:

```
VITE_API_URL=https://your-backend.vercel.app
```

Replace with your actual backend URL from Part 1.

### Step 5: Deploy Frontend
1. Click "Deploy"
2. Wait for deployment to complete (2-3 minutes)
3. Your frontend will be live at `https://your-frontend.vercel.app`

---

## ✅ Part 3: Verify Deployment

### Test Backend
Visit: `https://your-backend.vercel.app/api/health`
Should return: `{"status":"ok"}`

### Test Frontend
1. Visit your frontend URL
2. Try to register a new account
3. Create a business card
4. View the public card
5. Test QR code, download, and share features

---

## 🔧 Part 4: Configure Custom Domain (Optional)

### For Backend:
1. Go to your backend project in Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `api.yourdomain.com`)
4. Follow DNS configuration instructions

### For Frontend:
1. Go to your frontend project in Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `yourdomain.com`)
4. Follow DNS configuration instructions

---

## 🐛 Troubleshooting

### Backend Issues

**Problem:** 500 Internal Server Error
**Solution:** 
- Check Vercel logs: Project → Deployments → Click deployment → View Function Logs
- Verify MongoDB connection string in environment variables
- Ensure all environment variables are set correctly

**Problem:** CORS errors
**Solution:**
- Update CORS configuration in `Backend/src/server.js`
- Add your frontend URL to allowed origins

### Frontend Issues

**Problem:** API calls failing
**Solution:**
- Verify `VITE_API_URL` environment variable
- Check browser console for errors
- Ensure backend is deployed and running

**Problem:** Build fails
**Solution:**
- Check build logs in Vercel
- Verify all dependencies are in `package.json`
- Try building locally: `npm run build`

---

## 📊 Monitoring & Logs

### View Logs:
1. Go to Vercel dashboard
2. Select your project
3. Click "Deployments"
4. Click on a deployment
5. View "Build Logs" or "Function Logs"

### Monitor Performance:
1. Vercel provides analytics automatically
2. View in "Analytics" tab of your project
3. Monitor response times, errors, and traffic

---

## 🔄 Continuous Deployment

Vercel automatically deploys when you push to GitHub:

1. Make changes locally
2. Commit: `git commit -m "Your message"`
3. Push: `git push origin main`
4. Vercel automatically detects and deploys

### Branch Deployments:
- Push to any branch creates a preview deployment
- Main branch deploys to production
- Each PR gets its own preview URL

---

## 🔐 Security Checklist

- ✅ Change JWT_SECRET to a secure random string
- ✅ Never commit `.env` files to GitHub
- ✅ Use environment variables for all secrets
- ✅ Enable HTTPS (Vercel does this automatically)
- ✅ Set up proper CORS configuration
- ✅ Validate all user inputs
- ✅ Use MongoDB Atlas IP whitelist (or allow all for Vercel)

---

## 📝 Environment Variables Summary

### Backend (.env):
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
PORT=5000
NODE_ENV=production
```

### Frontend (.env):
```
VITE_API_URL=https://your-backend.vercel.app
```

---

## 🎉 Success!

Your Business Card Generator is now live!

**Backend:** https://your-backend.vercel.app
**Frontend:** https://your-frontend.vercel.app

Share your frontend URL with others to showcase your project!

---

## 📞 Need Help?

- Vercel Documentation: https://vercel.com/docs
- MongoDB Atlas: https://docs.atlas.mongodb.com
- GitHub Issues: Create an issue in your repository

---

## 🚀 Next Steps

1. Set up custom domain
2. Enable analytics
3. Add monitoring alerts
4. Set up automated testing
5. Configure CDN for images
6. Add rate limiting
7. Implement caching strategies

Good luck with your deployment! 🎊
