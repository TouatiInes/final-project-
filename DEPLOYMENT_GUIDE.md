# FlipIt Ecommerce - Vercel Deployment Guide

## 🚀 Manual Deployment Instructions

### Prerequisites
1. Create a Vercel account at [vercel.com](https://vercel.com)
2. Connect your GitHub account to Vercel

### Step 1: Deploy Backend

1. **Go to Vercel Dashboard**
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"

2. **Import Repository**
   - Select your GitHub repository: `TouatiInes/final-project-`
   - Choose the `backend` folder for deployment
   - Or create a new project and import just the backend folder

3. **Configure Backend Deployment**
   - **Framework Preset**: Other
   - **Root Directory**: `backend`
   - **Build Command**: Leave empty (uses package.json)
   - **Output Directory**: Leave empty
   - **Install Command**: `npm install`

4. **Environment Variables** (CRITICAL!)
   Add these environment variables in Vercel dashboard:
   ```
   MONGODB_URI=mongodb+srv://inestouati:6B0w512SaepYi7DL@cluster0.fbwzn0u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production-vercel
   JWT_EXPIRE=7d
   NODE_ENV=production
   ```

5. **Deploy Backend**
   - Click "Deploy"
   - Wait for deployment to complete
   - Note the deployment URL (e.g., `https://your-backend-name.vercel.app`)

### Step 2: Deploy Frontend

1. **Create New Project for Frontend**
   - Go back to Vercel dashboard
   - Click "New Project"
   - Import the same repository
   - This time select the root directory (frontend)

2. **Configure Frontend Deployment**
   - **Framework Preset**: Vite
   - **Root Directory**: `.` (root)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

3. **Environment Variables for Frontend**
   Add this environment variable:
   ```
   VITE_API_URL=https://your-backend-name.vercel.app/api
   ```
   (Replace `your-backend-name` with your actual backend deployment URL)

4. **Deploy Frontend**
   - Click "Deploy"
   - Wait for deployment to complete

### Step 3: Update Frontend API URL

After backend deployment, you need to update the frontend environment variable:

1. Go to your frontend project settings in Vercel
2. Navigate to "Environment Variables"
3. Update `VITE_API_URL` with your actual backend URL
4. Redeploy the frontend

### Step 4: Test Your Deployment

1. **Test Backend API**
   ```bash
   curl https://your-backend-name.vercel.app/api/health
   ```

2. **Test Frontend**
   - Visit your frontend URL
   - Try registering a new user
   - Test product browsing
   - Test cart functionality

## 📋 Deployment Checklist

### Backend Deployment ✅
- [ ] Repository imported to Vercel
- [ ] Environment variables configured
- [ ] MongoDB connection working
- [ ] API endpoints responding
- [ ] CORS configured for frontend domain

### Frontend Deployment ✅
- [ ] Vite build configuration correct
- [ ] API URL environment variable set
- [ ] Frontend connecting to backend
- [ ] All pages loading correctly
- [ ] Authentication working
- [ ] Cart functionality working

## 🔧 Troubleshooting

### Common Issues:

1. **Backend API not responding**
   - Check environment variables are set correctly
   - Verify MongoDB URI is correct
   - Check Vercel function logs

2. **Frontend can't connect to backend**
   - Verify VITE_API_URL is correct
   - Check CORS settings in backend
   - Ensure backend is deployed and running

3. **Database connection issues**
   - Verify MongoDB Atlas IP whitelist (set to 0.0.0.0/0 for Vercel)
   - Check MongoDB URI format
   - Ensure database user has correct permissions

## 🌐 Expected URLs

After successful deployment:
- **Frontend**: `https://your-frontend-name.vercel.app`
- **Backend API**: `https://your-backend-name.vercel.app/api`

## 📝 Post-Deployment Tasks

1. **Update README.md** with live URLs
2. **Test all functionality** thoroughly
3. **Monitor performance** and errors
4. **Set up custom domain** (optional)
5. **Configure analytics** (optional)

## 🔒 Security Notes

- JWT_SECRET should be a strong, unique value in production
- MongoDB IP whitelist should be configured properly
- Consider rate limiting for production use
- Monitor API usage and costs

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify all environment variables
3. Test API endpoints individually
4. Check browser console for frontend errors
