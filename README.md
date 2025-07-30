# FlipIt - Memory Card Game

A full-stack memory card game built with React, TypeScript, Node.js, and MongoDB.

## 🚀 Live Demo

- **Frontend**: [Deployed on Vercel]
- **Backend API**: [Deployed on Vercel]

## 📁 Project Structure

```
flipit/
├── frontend/          # React + TypeScript + Vite
├── backend/           # Node.js + Express + MongoDB
├── vercel.json        # Vercel deployment configuration
└── package.json       # Root package.json for monorepo
```

## 🛠️ Technologies Used

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React (icons)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing
- CORS, Helmet for security

## 🚀 Deployment on Vercel

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
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect the configuration from `vercel.json`

3. **Environment Variables**
   Set these in Vercel dashboard:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=production
   ```

4. **Domain Configuration**
   - Frontend will be served from the root domain
   - Backend API will be available at `/api/*` routes

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
