# Quick Deployment Steps for Vercel

## 🚀 Single Repository Deployment

### 1. Go to Vercel Dashboard
- Visit: https://vercel.com/dashboard
- Click "New Project"

### 2. Import Your Repository
- Select: `TouatiInes/final-project-`
- Framework: **Vite**
- Root Directory: **Leave empty** (uses root)

### 3. Environment Variables (Add these in Vercel)
```
MONGODB_URI=mongodb+srv://inestouati:6B0w512SaepYi7DL@cluster0.fbwzn0u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=8f2a9c4e6b1d3f7a9e2c5b8d1f4a7e0c3b6d9f2a5e8c1b4d7f0a3e6c9b2d5f8a1e4c7b0d3f6a9e2c5b8d1f4a7e0c3b6d9f2a5e8c1b4d7f0a3e6c9b2d5f8a
JWT_EXPIRE=7d
NODE_ENV=production
VITE_API_URL=https://final-project-git-main-touatiines-projects.vercel.app/api
```

### 4. Deploy
- Click "Deploy"
- Wait for completion

### 5. Test
- Frontend: https://final-project-git-main-touatiines-projects.vercel.app
- API: https://final-project-git-main-touatiines-projects.vercel.app/api/health

## ✅ That's it! Your full-stack app will be live.
