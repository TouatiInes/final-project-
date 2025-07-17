# Demo Credentials for FlipIt Authentication

## Test User Accounts

### Regular User
- **Email**: `user@flipit.com`
- **Password**: `user123`
- **Role**: User
- **Access**: Shopping, cart, profile

### Admin User
- **Email**: `admin@flipit.com`
- **Password**: `admin123`
- **Role**: Admin
- **Access**: All user features + admin panel

## Registration
You can also create new accounts using the registration form. All new accounts will be created with "user" role.

## Features Available
- ✅ Login with email and password
- ✅ Registration with name, email, and password
- ✅ Password visibility toggle
- ✅ Form validation with real-time feedback
- ✅ User session management with localStorage
- ✅ Logout functionality
- ✅ Toast notifications for success/error messages
- ✅ Loading spinners during authentication
- ✅ Attractive gradient backgrounds
- ✅ Smooth animations and transitions
- ✅ Responsive design for all devices
- ✅ Mobile-friendly interface
- ✅ User dropdown menu in header
- ✅ Profile and orders navigation (ready for implementation)

## Authentication Flow
1. **Login**: Enter credentials → Loading spinner → Success toast → Redirect to home page
2. **Register**: Fill form → Validation → Loading spinner → Success toast → Auto-login → Redirect to home page
3. **Logout**: Click logout → Success toast → Clear session → Stay on current page
4. **Error Handling**: Invalid credentials → Error toast with helpful message
5. **Session Persistence**: Automatic login on page refresh if token exists
6. **Protected Routes**: Can be added for user-specific content

## Technical Details
- **State Management**: React Context with TypeScript
- **Session Persistence**: LocalStorage for tokens and user data
- **Authentication**: Mock system (ready for API integration)
- **UI Components**: Custom Toast notifications and Loading spinners
- **Styling**: Tailwind CSS with gradient backgrounds and animations
- **Form Validation**: Real-time validation with error handling
- **Responsive Design**: Mobile-first approach with breakpoints
- **Icons**: Lucide React for consistent iconography
- **Transitions**: Smooth animations for better UX

## UI Enhancements
- **Gradient Backgrounds**: Beautiful gray gradients
- **Icon Circles**: Branded login/register icons
- **Hover Effects**: Interactive form elements
- **Loading States**: Professional loading spinners
- **Toast Notifications**: Success/error messages with auto-dismiss
- **Form Focus**: Enhanced input focus states with transitions
