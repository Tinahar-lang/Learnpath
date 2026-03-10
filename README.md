# LearnPath

An **AI-powered educational application** designed to provide personalized learning paths for students. LearnPath combines modern web technologies with Firebase backend to deliver an intelligent, interactive learning experience.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **AI-Powered Learning Paths**: Adaptive learning recommendations based on user progress
- **Interactive Dashboard**: Real-time progress tracking and analytics
- **Data Visualization**: Beautiful charts and graphs to monitor learning metrics
- **Firebase Integration**: Secure authentication and real-time database
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Multi-language Support**: Internationalization (i18n) ready setup
- **Modern UI**: Built with React and Tailwind CSS for a polished user experience

## 🛠 Tech Stack

**Frontend:**
- **React 19.2.0** - UI framework
- **Vite 7.2.4** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts 3.7.0** - Data visualization library
- **Lucide React 0.562.0** - Icon library

**Backend:**
- **Firebase 12.8.0** - Authentication, database, and cloud functions

**Development Tools:**
- **ESLint** - Code quality and linting
- **React Hooks** - State management

## 📦 Prerequisites

Before getting started, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- A **Firebase project** with credentials

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Tinahar-lang/Learnpath.git
cd Learnpath
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory with your Firebase credentials:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

> ⚠️ **Important**: Never commit `.env.local` to version control. It's already in `.gitignore`.

## 💻 Getting Started

### Development Server

Start the development server with hot-reload:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Code Linting

Check and fix code quality issues:

```bash
npm run lint
```

## 📁 Project Structure

```
Learnpath/
├── src/
│   ├── main.jsx              # Application entry point
│   ├── App.jsx               # Root component
│   ├── components/           # Reusable React components
│   ├── pages/                # Page components
│   ├── services/             # Firebase and API services
│   ├── hooks/                # Custom React hooks
│   ├── utils/                # Utility functions
│   └── styles/               # Global styles
├── public/                   # Static assets
├── dist/                     # Production build output
├── index.html                # HTML entry point
├── vite.config.js            # Vite configuration
├── package.json              # Project dependencies
├── .env.local                # Environment variables (not committed)
├── .gitignore                # Git ignore rules
├── I18N_SETUP.md             # Internationalization setup guide
└── README.md                 # This file
```

## 📚 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint and check code quality |

## ⚙️ Configuration

### Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Copy your project credentials
3. Add them to `.env.local` file
4. Enable Authentication methods you plan to use (Email, Google, etc.)
5. Create Firestore or Realtime Database

### Internationalization (i18n)

For multi-language support setup, refer to [I18N_SETUP.md](./I18N_SETUP.md)

## 🤝 Contributing

We welcome contributions! To contribute:

1. **Fork** the repository
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Commit your changes**: `git commit -m 'Add your feature description'`
4. **Push to the branch**: `git push origin feature/your-feature-name`
5. **Submit a Pull Request** with a clear description of changes

### Code Guidelines

- Follow ESLint rules: `npm run lint`
- Write meaningful commit messages
- Keep components small and reusable
- Add comments for complex logic
- Test your changes before submitting PR

## 📝 License

This project is licensed under the MIT License - see LICENSE file for details.

## 🙋 Support & Questions

If you have questions or need help:
- Open an [Issue](https://github.com/Tinahar-lang/Learnpath/issues)
- Check existing documentation in the repository
- Review Firebase [documentation](https://firebase.google.com/docs)

---

**Happy Learning! 🎓**

Made with ❤️ by the LearnPath team
