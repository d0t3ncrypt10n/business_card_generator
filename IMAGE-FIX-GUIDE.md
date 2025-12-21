# Image Display Fix Guide

## Problem
Profile images are not displaying in the application.

## Root Cause
The image URLs are being constructed correctly, but we need to verify the complete flow from upload to display.

## Solution Steps

### Step 1: Verify Backend is Serving Images

1. **Check if backend is running:**
   ```bash
   cd Backend
   npm run dev
   ```
   Should see: `Server running on port 5000`

2. **Test image serving directly:**
   Open browser and go to:
   ```
   http://localhost:5000/uploads/[your-image-filename]
   ```
   You should see the image.

### Step 2: Check Browser Console

1. **Open DevTools** (F12)
2. **Go to Console tab**
3. **Upload an image** and watch for these logs:
   ```
   Upload response - imageUrl: /uploads/1234567890-image.png
   FormData updated with profileImage: /uploads/1234567890-image.png
   CardPreview - Image Path: /uploads/1234567890-image.png
   CardPreview - BASE_URL: http://localhost:5000
   CardPreview - Full URL: http://localhost:5000/uploads/1234567890-image.png
   Image loaded successfully: http://localhost:5000/uploads/1234567890-image.png
   ```

4. **If you see errors**, check:
   - Network tab for failed requests
   - Console for error messages
   - Image URL construction

### Step 3: Verify Environment Variables

1. **Frontend .env file** (`Frontend/.env`):
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

2. **Backend .env file** (`Backend/.env`):
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/business-card-db
   JWT_SECRET=your_secret_key_here
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173
   ```

3. **Restart both servers** after changing .env files!

### Step 4: Clear Cache and Test

1. **Clear browser cache:**
   - Chrome/Edge: Ctrl+Shift+Delete
   - Or hard refresh: Ctrl+Shift+R

2. **Clear localStorage:**
   - DevTools > Application > Local Storage
   - Right-click > Clear

3. **Restart frontend dev server:**
   ```bash
   cd Frontend
   # Stop server (Ctrl+C)
   npm run dev
   ```

### Step 5: Test Complete Flow

1. **Login/Register**
2. **Create new card**
3. **Upload image** - Watch console for logs
4. **Check preview** - Image should appear immediately
5. **Save card**
6. **Go to Dashboard** - Image should appear in card list
7. **Click View** - Image should appear in public view
8. **Click Edit** - Image should appear in edit form

## Debugging Checklist

### If Image Doesn't Show in Preview:

- [ ] Check console for "CardPreview" logs
- [ ] Verify BASE_URL is `http://localhost:5000`
- [ ] Verify image path starts with `/uploads/`
- [ ] Check Network tab for 404 errors
- [ ] Verify uploads directory exists in Backend

### If Image Doesn't Upload:

- [ ] Check file size (max 5MB)
- [ ] Check file type (JPEG, PNG, GIF only)
- [ ] Check console for upload errors
- [ ] Verify Backend/uploads directory exists
- [ ] Check Backend/uploads has write permissions

### If Image Shows Broken Icon:

- [ ] Check Network tab - is request failing?
- [ ] Verify image URL in browser address bar
- [ ] Check CORS settings in backend
- [ ] Verify static file serving in server.js

## Common Issues and Fixes

### Issue 1: 404 Not Found

**Symptom:** Network tab shows 404 for image URL

**Fix:**
```bash
cd Backend
ls uploads/
# If directory doesn't exist:
mkdir uploads
```

### Issue 2: CORS Error

**Symptom:** Console shows CORS policy error

**Fix:** Check `Backend/src/server.js`:
```javascript
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
```

### Issue 3: Wrong BASE_URL

**Symptom:** Console shows BASE_URL as undefined or wrong

**Fix:**
1. Check `Frontend/src/config/api.js` exists
2. Restart frontend server
3. Clear browser cache

### Issue 4: Image Path Wrong in Database

**Symptom:** Database has full URL instead of path

**Fix:**
1. Delete the card
2. Create new card with image
3. Backend should store: `/uploads/filename.jpg`
4. NOT: `http://localhost:5000/uploads/filename.jpg`

## Testing with Test Page

1. **Open test page:**
   ```
   http://localhost:5173/test-image.html
   ```

2. **Check which images load:**
   - Test 1 (direct URL) should work
   - Test 2 (relative path) should fail
   - Test 3 (constructed URL) should work

3. **Check console logs** for BASE_URL values

## Manual Database Check

If you want to verify what's stored in the database:

```bash
# Connect to MongoDB
mongosh

# Use the database
use business-card-db

# Find a card
db.cards.findOne()

# Check profileImage field
# Should be: "/uploads/filename.jpg"
# NOT: "http://localhost:5000/uploads/filename.jpg"
```

## Quick Fix Script

If nothing works, try this complete reset:

```bash
# Stop all servers (Ctrl+C in all terminals)

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

# Clear browser
# DevTools > Application > Clear storage > Clear site data

# Restart
cd Backend && npm run dev
cd Frontend && npm run dev

# Test again
```

## Success Indicators

You'll know it's working when:

✅ Console shows all "CardPreview" logs correctly
✅ Image appears in live preview immediately after upload
✅ Image appears in dashboard card list
✅ Image appears in public card view
✅ Image appears in edit form
✅ No 404 errors in Network tab
✅ No console errors

## Still Not Working?

1. **Take screenshots of:**
   - Console logs
   - Network tab (failed requests)
   - The actual error message

2. **Check:**
   - Node version: `node --version` (should be v16+)
   - MongoDB running: `mongosh --eval "db.version()"`
   - Ports not in use: `netstat -ano | findstr :5000`

3. **Provide:**
   - Operating system
   - Browser and version
   - Exact steps to reproduce
   - Error messages

## Contact

If you've tried everything and it still doesn't work, create an issue with:
- All the information from "Still Not Working?" section
- Screenshots
- Console logs
- Network tab screenshots
