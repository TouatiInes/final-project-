# FlipIt Ecommerce - Vercel Deployment Guide

## 🚀 Single Repository Deployment Instructions

### Prerequisites
1. Create a Vercel account at [vercel.com](https://vercel.com)
2. Connect your GitHub account to Vercel

### Step 1: Deploy Full-Stack Application

1. **Go to Vercel Dashboard**
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"

2. **Import Repository**
   - Select your GitHub repository: `TouatiInes/final-project-`
   - Import the entire repository (both frontend and backend)

3. **Configure Deployment**
   - **Framework Preset**: Vite
   - **Root Directory**: `.` (root - leave empty)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Environment Variables** (CRITICAL!)
   Add these environment variables in Vercel dashboard:

   **Backend Variables:**
   ```
   MONGODB_URI=mongodb+srv://inestouati:6B0w512SaepYi7DL@cluster0.fbwzn0u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=8f2a9c4e6b1d3f7a9e2c5b8d1f4a7e0c3b6d9f2a5e8c1b4d7f0a3e6c9b2d5f8a1e4c7b0d3f6a9e2c5b8d1f4a7e0c3b6d9f2a5e8c1b4d7f0a3e6c9b2d5f8a
   JWT_EXPIRE=7d
   NODE_ENV=production
   ```

   **Frontend Variables:**
   ```
   VITE_API_URL=https://final-project-git-main-touatiines-projects.vercel.app/api
   ```
   (This will be your actual deployment URL + /api)

5. **Deploy Application**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your app will be available at: `https://final-project-git-main-touatiines-projects.vercel.app`
   - API endpoints will be at: `https://final-project-git-main-touatiines-projects.vercel.app/api`

### Step 2: Test Your Deployment

1. **Test Backend API**
   ```bash
   curl https://final-project-git-main-touatiines-projects.vercel.app/api/health
   ```

2. **Test Frontend**
   - Visit: `https://final-project-git-main-touatiines-projects.vercel.app`
   - Try registering a new user
   - Test product browsing
   - Test cart functionality

## 📋 Deployment Checklist

### Single Repository Deployment ✅
- [ ] Repository imported to Vercel
- [ ] Environment variables configured (both frontend and backend)
- [ ] MongoDB connection working
- [ ] API endpoints responding at `/api/*`
- [ ] Frontend serving correctly
- [ ] Frontend connecting to backend API
- [ ] All pages loading correctly
- [ ] Authentication working
- [ ] Cart functionality working
- [ ] CORS configured properly

## 🔧 Troubleshooting

### Common Issues:

1. **Backend API not responding**
   - Check environment variables are set correctly
   - Verify MongoDB URI is correct
   - Check Vercel function logs

2. **Frontend can't connect to backend**
   - Verify VITE_API_URL is set to: `https://final-project-git-main-touatiines-projects.vercel.app/api`
   - Check CORS settings in backend
   - Ensure API routes are working at `/api/*`

3. **Database connection issues**
   - Verify MongoDB Atlas IP whitelist (set to 0.0.0.0/0 for Vercel)
   - Check MongoDB URI format
   - Ensure database user has correct permissions

## 🌐 Expected URLs

After successful deployment:
- **Full Application**: `https://final-project-git-main-touatiines-projects.vercel.app`
- **Backend API**: `https://final-project-git-main-touatiines-projects.vercel.app/api`

## 📝 Post-Deployment Tasks

1. **Update README.md** with live URLs
2. **Test all functionality** thoroughly
3. **Monitor performance** and errors
4. **Set up custom domain** (optional)
5. **Configure analytics** (optional)

## 🔒 Security Notes

- **JWT_SECRET**: The provided secret is cryptographically secure (128 hex characters)
- **Never commit secrets**: Keep JWT_SECRET out of version control
- **MongoDB Security**: IP whitelist configured for Vercel (0.0.0.0/0)
- **Generate New Secrets**: Use `node generate-jwt-secret.js` to create new secrets
- **Rate Limiting**: Already configured in the backend
- **HTTPS Only**: Vercel provides automatic HTTPS
- **Monitor Usage**: Check Vercel and MongoDB Atlas dashboards regularly

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify all environment variables
3. Test API endpoints individually
4. Check browser console for frontend errors
