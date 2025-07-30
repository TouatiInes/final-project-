# FlipIt - Vercel Deployment Guide

This guide covers deploying the FlipIt application to Vercel as a monorepo.

## 🚀 Quick Deploy to Vercel

### Prerequisites

1. **GitHub Repository**: Push your code to GitHub
2. **MongoDB Atlas Account**: Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
3. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)

### Step 1: Prepare MongoDB Atlas

1. Create a new cluster in MongoDB Atlas
2. Create a database user with read/write permissions
3. Whitelist all IP addresses (0.0.0.0/0) for Vercel deployment
4. Get your connection string: `mongodb+srv://username:password@cluster.mongodb.net/flipit`

### Step 2: Push to GitHub

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### Step 3: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect the monorepo configuration from `vercel.json`
5. Click "Deploy"

### Step 4: Configure Environment Variables

In your Vercel project dashboard, go to Settings > Environment Variables and add:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/flipit
JWT_SECRET=your-super-secret-jwt-key-minimum-32-characters
NODE_ENV=production
```

**Important**: Generate a secure JWT secret:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Step 5: Redeploy

After adding environment variables, trigger a new deployment:
1. Go to Deployments tab
2. Click the three dots on the latest deployment
3. Select "Redeploy"

## 🏗️ Project Structure for Vercel

The project is configured as a monorepo with:

```
flipit/
├── frontend/          # React app (served from root domain)
├── backend/           # Express API (served from /api/*)
├── vercel.json        # Vercel configuration
└── package.json       # Root package.json
```

## 📁 Vercel Configuration

The `vercel.json` file configures:
- **Frontend**: Built with Vite and served from root domain
- **Backend**: Node.js API served from `/api/*` routes
- **Routing**: SPA routing for frontend, API routing for backend

## 🔧 Environment Variables

### Required for Production

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://...` |
| `JWT_SECRET` | JWT signing secret (32+ chars) | `abc123...` |
| `NODE_ENV` | Environment mode | `production` |

### Optional

| Variable | Description | Default |
|----------|-------------|---------|
| `FRONTEND_URL` | Custom frontend domain | Auto-detected |

## 🌐 Domain Configuration

After deployment:
- **Frontend**: Available at your Vercel domain (e.g., `your-app.vercel.app`)
- **Backend API**: Available at `your-app.vercel.app/api/*`

## 🔍 Testing Your Deployment

1. **Health Check**: Visit `your-app.vercel.app/api/health`
2. **Frontend**: Visit `your-app.vercel.app`
3. **Registration**: Try creating a new account
4. **Login**: Test the authentication flow

## 🐛 Troubleshooting

### Common Issues

1. **"Internal Server Error" on API calls**
   - Check environment variables are set correctly
   - Verify MongoDB connection string
   - Check Vercel function logs

2. **CORS Errors**
   - The backend is configured to allow Vercel domains
   - If using a custom domain, add it to `FRONTEND_URL` env var

3. **Database Connection Issues**
   - Verify MongoDB URI format
   - Ensure IP whitelist includes 0.0.0.0/0
   - Check database user permissions

4. **Build Failures**
   - Check Node.js version compatibility (18+)
   - Verify all dependencies are in package.json

### Debugging Steps

1. **Check Vercel Function Logs**:
   - Go to your Vercel dashboard
   - Click on your project
   - Go to "Functions" tab
   - Check logs for errors

2. **Test API Endpoints**:
   ```bash
   curl https://your-app.vercel.app/api/health
   ```

3. **Check Environment Variables**:
   - Ensure all required variables are set
   - Variables are case-sensitive
   - No extra spaces or quotes

## 🔄 Continuous Deployment

Vercel automatically deploys when you push to your main branch:

```bash
git add .
git commit -m "Update feature"
git push origin main
```

## 📊 Monitoring

1. **Vercel Analytics**: Built-in performance monitoring
2. **Function Logs**: Real-time error tracking
3. **MongoDB Atlas**: Database performance metrics

## 🔒 Security Considerations

1. **Environment Variables**: Never commit secrets to Git
2. **JWT Secret**: Use a strong, random secret (32+ characters)
3. **MongoDB**: Use strong passwords and IP whitelisting
4. **CORS**: Configured to allow only Vercel domains

## 📞 Support

If you encounter issues:

1. Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
2. MongoDB Atlas support: [docs.atlas.mongodb.com](https://docs.atlas.mongodb.com)
3. Review application logs in Vercel dashboard

## 🎯 Next Steps

After successful deployment:

1. **Custom Domain**: Add your own domain in Vercel settings
2. **SSL Certificate**: Automatically provided by Vercel
3. **Performance**: Monitor and optimize using Vercel Analytics
4. **Backup**: Set up regular MongoDB backups
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
