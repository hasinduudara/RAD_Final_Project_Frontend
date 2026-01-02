# Language Hub - Frontend

A modern, interactive web application for learning web development technologies including HTML, CSS, and JavaScript in the Sinhala language. Built with React, TypeScript, and Vite.

## 🚀 Features

- **Interactive Learning Platform**: Structured courses for HTML, CSS, and JavaScript
- **AI-Powered Chat Assistant**: Get help with coding questions through an integrated AI chatbot
- **User Authentication**: Complete authentication system with:
  - User registration and login
  - Email verification (OTP)
  - Password reset functionality
  - Protected routes for authenticated users
- **User Profiles**: Personalized user profile management
- **Certificate Generation**: Download certificates upon course completion
- **Responsive Design**: Built with Tailwind CSS for a modern, mobile-friendly interface
- **Course Progress Tracking**: Monitor your learning journey

## 🛠️ Tech Stack

- **Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.2.2
- **Styling**: Tailwind CSS 4.1.17
- **State Management**: Redux Toolkit 2.11.0
- **Routing**: React Router DOM 7.9.6
- **HTTP Client**: Axios 1.13.2
- **UI Icons**: Lucide React 0.553.0
- **Notifications**: React Hot Toast 2.6.0

## 📋 Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager
- Backend API running on `http://localhost:5000` (see API configuration)

## 🔧 Installation

1. **Clone the repository** (if not already cloned):
   ```bash
   git clone https://github.com/hasinduudara/RAD_Final_Project_Frontend.git
   cd "Language Hub/frontend"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment** (if needed):
   - The API base URL is set to `http://localhost:5000/api/v1` by default
   - Update `src/services/api.ts` if your backend runs on a different port

## 🚀 Running the Application

### Development Mode

Start the development server with hot-reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

### Production Build

Build the application for production:

```bash
npm run build
```

The optimized build will be created in the `dist` folder.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 📁 Project Structure

```
frontend/
├── public/              # Static assets
│   └── vite.svg
├── src/
│   ├── assets/          # Images and static resources
│   │   ├── CSS.png
│   │   ├── HTML.png
│   │   ├── JavaScript.png
│   │   └── HTML/        # Course-specific images
│   ├── components/      # Reusable React components
│   │   ├── html/        # HTML course components
│   │   ├── css/         # CSS course components
│   │   ├── js/          # JavaScript course components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ChatWindow.tsx
│   │   ├── ChatList.tsx
│   │   └── CertificateDownloader.tsx
│   ├── context/         # React Context providers
│   │   └── userContext.tsx
│   ├── pages/           # Page components
│   │   ├── WelcomePage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── RegisterPage.tsx
│   │   ├── ForgotPasswordPage.tsx
│   │   ├── VerifyOTPPage.tsx
│   │   ├── ResetPasswordPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── ProfilePage.tsx
│   │   └── ChatPage.tsx
│   ├── routes/          # Routing configuration
│   │   ├── AppRoutes.tsx
│   │   └── ProtectedRoute.tsx
│   ├── services/        # API service layer
│   │   ├── api.ts       # Axios instance and interceptors
│   │   ├── user.ts      # User-related API calls
│   │   ├── chat.ts      # Chat API calls
│   │   ├── course.ts    # Course API calls
│   │   └── uploadImage.ts
│   ├── App.tsx          # Root component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── package.json
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── eslint.config.js     # ESLint configuration
```

## 🔐 Authentication Flow

1. **Registration**: New users register with email and password
2. **OTP Verification**: Users verify their email via OTP
3. **Login**: Authenticated users receive access and refresh tokens
4. **Protected Routes**: Certain routes require authentication
5. **Token Refresh**: Automatic token refresh on expiration
6. **Password Reset**: Users can reset forgotten passwords via email

## 🎓 Available Courses

- **HTML Course**: Learn the fundamentals of HTML structure, tags, and best practices
- **CSS Course**: Master styling, layouts, and responsive design
- **JavaScript Course**: Understand programming concepts, DOM manipulation, and modern JS features

## 🌐 Available Routes

### Public Routes
- `/` - Welcome/Landing page
- `/login` - User login
- `/register` - New user registration
- `/forgot-password` - Password reset request
- `/verify-otp` - Email verification
- `/reset-password` - Password reset confirmation

### Protected Routes (Require Authentication)
- `/home` - Dashboard/Home page
- `/profile` - User profile management
- `/ai` - AI chat assistant
- `/html-course` - HTML learning course
- `/css-courses` - CSS learning course
- `/javascript-courses` - JavaScript learning course

## 🔑 Key Features Implementation

### API Service Layer
- Centralized axios instance with interceptors
- Automatic token attachment for authenticated requests
- Token refresh logic on 401 responses
- Public endpoint handling

### State Management
- Redux Toolkit for global state management
- User context for authentication state

### Responsive Design
- Tailwind CSS utility classes
- Mobile-first approach
- Modern UI with Lucide React icons

## 🐛 Development

### Code Quality
The project uses ESLint with TypeScript and React plugins for code quality. Configuration includes:
- React Hooks rules
- React Refresh plugin
- TypeScript ESLint parser

### Type Safety
TypeScript is configured with strict mode for enhanced type safety and better developer experience.

## 📝 Scripts Reference

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and not currently licensed for public use.

## 🔗 Dependencies

For a complete list of dependencies, see `package.json`.

### Key Dependencies:
- **React 19.2.0**: UI library
- **TypeScript 5.9.3**: Type safety
- **Vite 7.2.2**: Build tool and dev server
- **React Router DOM 7.9.6**: Routing
- **Redux Toolkit 2.11.0**: State management
- **Tailwind CSS 4.1.17**: Styling framework
- **Axios 1.13.2**: HTTP client
- **React Hot Toast 2.6.0**: Toast notifications

## 🆘 Support

For issues or questions, please open an issue in the repository or contact the development team.

---

**Built with ❤️ for aspiring web developers**

