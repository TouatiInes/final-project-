# Quick Deployment Steps for Vercel

## 🚀 Separate Deployments (Recommended)

### Backend Deployment

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Click "New Project"

2. **Import Repository for Backend**
   - Select: `TouatiInes/final-project-`
   - Root Directory: **backend**
   - Framework: **Other**

3. **Backend Environment Variables**
   ```
   MONGODB_URI=mongodb+srv://inestouati:6B0w512SaepYi7DL@cluster0.fbwzn0u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=8f2a9c4e6b1d3f7a9e2c5b8d1f4a7e0c3b6d9f2a5e8c1b4d7f0a3e6c9b2d5f8a1e4c7b0d3f6a9e2c5b8d1f4a7e0c3b6d9f2a5e8c1b4d7f0a3e6c9b2d5f8a
   JWT_EXPIRE=7d
   NODE_ENV=production
   ```

4. **Deploy Backend** - Click "Deploy"

### Frontend Deployment

1. **Create New Project**
   - Click "New Project" again
   - Select: `TouatiInes/final-project-`
   - Root Directory: **frontend**
   - Framework: **Vite**

2. **Frontend Environment Variables**
   ```
   VITE_API_URL=https://your-backend-url.vercel.app/api
   ```
   (Replace with your actual backend URL from step 4)

3. **Deploy Frontend** - Click "Deploy"

## ✅ You'll have two separate deployments:
- **Backend API**: `https://your-backend-name.vercel.app/api`
- **Frontend**: `https://your-frontend-name.vercel.app`
