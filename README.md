# FlipIt - E-commerce Platform

A modern, full-stack e-commerce platform built with React, TypeScript, Node.js, and MongoDB featuring a beautiful blue-purple coordinated design theme.

## 🚀 Live Demo

- **Frontend**: [Will be deployed on Vercel]
- **Backend API**: [Will be deployed on Vercel]

## 📁 Project Structure

```
flipit/
├── frontend/          # React + TypeScript + Vite
├── backend/           # Node.js + Express + MongoDB
├── vercel.json        # Vercel deployment configuration
└── package.json       # Root package.json for monorepo
```

## 🎨 Design Features

### Color Scheme
- **Primary Theme**: Blue-purple gradient (`from-blue-600 via-purple-600 to-indigo-700`)
- **Coordinated Design**: All components use harmonious blue-purple tones
- **Strategic Pink Accents**: Used selectively for visual interest
- **Professional Appearance**: Clean, modern, and sophisticated

### Key Components
- **Responsive Navbar**: Blue-purple themed with gradient logo
- **Hero Section**: Coordinated background with modern shopping imagery
- **Product Cards**: Blue-purple "Add to Cart" buttons
- **Category Cards**: Diverse colors (blue, pink, green, purple) for visual variety
- **Footer**: Blue-purple gradient matching the overall theme

## 🛠️ Technologies Used

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS (with custom blue-purple color palette)
- React Router DOM
- Lucide React (icons)
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing
- CORS, Helmet for security

## 🚀 Vercel Deployment Guide

### Prerequisites
1. GitHub account
2. Vercel account
3. MongoDB Atlas account

### Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "New Project"
   - Import your GitHub repository
   - **Important**: Select the root directory (not frontend or backend)
   - Vercel will automatically detect the configuration from `vercel.json`
   - Click "Deploy"

3. **Environment Variables**
   In Vercel dashboard → Settings → Environment Variables, add:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/flipit
   JWT_SECRET=your-super-secret-jwt-key-32-characters-long
   NODE_ENV=production
   FRONTEND_URL=https://your-domain.vercel.app
   ```

4. **Automatic Configuration**
   - ✅ Frontend builds automatically from `/frontend` directory
   - ✅ Backend API serves from `/api/*` routes
   - ✅ Static files served from root domain
   - ✅ All routes properly configured in `vercel.json`

5. **Verification**
   - Frontend: `https://your-domain.vercel.app`
   - Backend API: `https://your-domain.vercel.app/api/health`
   - Test the full application functionality

## 🔧 Local Development

### Installation
```bash
# Install all dependencies
npm run install:all

# Or install individually
npm install
cd frontend && npm install
cd ../backend && npm install
```

### Running the Application
```bash
# Start frontend (development)
npm run dev:frontend

# Start backend (development)
npm run dev:backend
```

### Building for Production
```bash
# Build frontend
npm run build

# Build backend
cd backend && npm run build
```

## 🎮 Game Features

- **Memory Card Game**: Flip cards to find matching pairs
- **User Authentication**: Register and login system
- **Score Tracking**: Track your best scores
- **Responsive Design**: Works on desktop and mobile
- **Real-time Updates**: Live score updates

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Game
- `GET /api/game/scores` - Get user scores
- `POST /api/game/scores` - Save new score

### User
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

## 🔐 Environment Variables

Create `.env` files in both frontend and backend directories:

### Backend `.env`
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/flipit
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=development
PORT=5000
```

### Frontend `.env`
```
VITE_API_URL=http://localhost:5000/api
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or issues, please open an issue on GitHub.
