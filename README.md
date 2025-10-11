# 🌟 JoJo's Random Adventure

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?logo=vite)](https://vitejs.dev/)
[![Material-UI](https://img.shields.io/badge/Material--UI-5.14.20-007FFF?logo=mui)](https://mui.com/)

A modern, feature-rich Progressive Web App (PWA) for discovering random JoJo's Bizarre Adventure episodes, manga chapters, and exploring the JoJo universe. Built with React, TypeScript, Material-UI, and Vite.

<img width="1727" height="972" alt="Screenshot 2025-10-10 at 19 06 35" src="https://github.com/user-attachments/assets/27dc0337-490a-4ecc-acaa-a930a47bd9cd" />


## ✨ Features

### 🎲 Core Randomization
- **Random Episode Selection**: Instantly jump to any anime episode from Parts 1-6
- **Random Manga Chapter**: Discover manga chapters from all 10 parts including Steel Ball Run and JoJolion
- **Random Wiki Exploration**: Open random JoJo's Bizarre Adventure wiki pages to learn something new
- **Smart Part Selection**: Filter randomization by your favorite JoJo parts

### 🎨 Customization
- **Dynamic Theming**: Toggle between light and dark modes with beautiful Material-UI themes
- **Character Backgrounds**: Customize your experience with backgrounds featuring iconic JoJo protagonists
- **Persistent Preferences**: Your settings are saved locally and persist across sessions
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 📊 Tracking & History
- **View History**: Keep track of all episodes and chapters you've visited
- **Favorites System**: Save your favorite episodes and manga chapters for quick access
- **Statistics Dashboard**: Monitor your viewing patterns across different parts
- **Export/Import Data**: Backup and restore your entire user data including history and favorites

### 📖 Content Discovery
- **Character Biographies**: Explore detailed bios for all 8 main JoJo protagonists
- **Part Information**: Learn about each part's story, protagonist, and unique features
- **Direct Links**: Access content on Crunchyroll (anime) and MangaDex (manga)

### 🔧 Progressive Web App
- **Offline Support**: Works without an internet connection after initial load
- **Installable**: Add to your home screen for an app-like experience
- **Fast Performance**: Lightning-fast with Vite's optimized build system
- **Service Worker**: Intelligent caching for instant page loads

## 🚀 Quick Start

### Live Deployments

This project is automatically deployed to two platforms:

- **🌊 Surge.sh**: https://jojos-random-adventure.surge.sh
- **📄 GitHub Pages**: https://vaporjawn.github.io/JoJos-Random-Adventure/

Both sites are automatically updated on every push to the `main` branch via GitHub Actions.

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/Vaporjawn/JoJos-Random-Adventure.git
   cd JoJos-Random-Adventure
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   \`\`\`
   Navigate to http://localhost:5173
   \`\`\`

## 🛠️ Development

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot module replacement |
| `npm run build` | Build optimized production bundle with TypeScript compilation |
| `npm run preview` | Preview production build locally |
| `npm test` | Run test suite with Vitest |
| `npm run test:ui` | Launch interactive testing UI |
| `npm run lint` | Check code quality with ESLint |
| `npm run lint:fix` | Auto-fix linting issues |
| `npm run type-check` | Validate TypeScript types without compilation |
| `npm run deploy` | Deploy to both Surge.sh and GitHub Pages |
| `npm run deploy:surge` | Deploy to Surge.sh only |
| `npm run deploy:gh-pages` | Deploy to GitHub Pages only |

### Deployment

This project features automated deployment to both Surge.sh and GitHub Pages. For detailed deployment instructions, including one-time setup and manual deployment options, see [DEPLOYMENT.md](DEPLOYMENT.md).

**Quick Deploy**: Once configured, simply push to main:
```bash
git add .
git commit -m "Your changes"
git push origin main
```

GitHub Actions will automatically build and deploy to both platforms!

### Project Structure

\`\`\`
JoJos-Random-Adventure/
├── public/                 # Static assets
│   ├── bios/              # Character biography HTML pages
│   ├── images/            # Static images
│   ├── manifest.json      # PWA manifest
│   └── robots.txt         # SEO robots file
├── src/
│   ├── assets/            # Dynamic assets (images, favicons)
│   ├── backend/           # Data management layer
│   │   ├── episodes.ts    # Episode data and utilities
│   │   ├── interfaces/    # TypeScript interfaces
│   │   └── types/         # TypeScript type definitions
│   ├── components/        # React components
│   │   ├── HomePage.tsx   # Main randomizer interface
│   │   ├── CustomizePage.tsx  # Settings and customization
│   │   ├── ExtraPage.tsx  # History, favorites, statistics
│   │   ├── BioPage.tsx    # Character biography viewer
│   │   ├── Layout.tsx     # App layout wrapper
│   │   └── NotificationSystem.tsx  # Toast notifications
│   ├── contexts/          # React Context providers
│   │   ├── JojoContext.ts # Context definition
│   │   └── JojoProvider.tsx  # Global state provider
│   ├── data/              # Static data files
│   │   ├── episodes.ts    # Crunchyroll episode URLs
│   │   └── backgrounds.ts # Background image data
│   ├── hooks/             # Custom React hooks
│   │   └── useJojo.ts     # Main state management hook
│   ├── theme/             # Material-UI theming
│   │   └── index.ts       # Theme configuration
│   ├── types/             # Global TypeScript types
│   ├── App.tsx            # Root application component
│   ├── main.tsx           # Application entry point
│   └── storage.ts         # localStorage utilities
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
\`\`\`

## 🎯 Usage Guide

### Discovering Random Content

1. **Random Anime Episode**
   - Click "Random Anime" to jump to a random Crunchyroll episode
   - Episodes span Parts 1-6 (Phantom Blood through Stone Ocean)
   - Opens directly on Crunchyroll for immediate viewing

2. **Random Manga Chapter**
   - Click "Random Manga" to discover a random manga chapter
   - Includes all 10 parts including manga-only Steel Ball Run and JoJolion
   - Opens on MangaDex for online reading

3. **Random Wiki**
   - Click "Random Wiki" to explore a random JoJo wiki article
   - Great for learning trivia, character details, or Stand information

### Customizing Your Experience

1. **Part Filters**
   - Navigate to the Customize page
   - Select/deselect parts to include in randomization
   - Only enabled parts will appear in random selections

2. **Theme Toggle**
   - Click the theme icon to switch between light and dark modes
   - Preference is saved and persists across sessions

3. **Background Selection**
   - Choose from 8 protagonist backgrounds (Jonathan, Joseph, Jotaro, Josuke, Giorno, Jolyne, Johnny, Gappy)
   - Custom backgrounds enhance your browsing experience

### Managing History & Favorites

1. **View History**
   - Access the Extra page to see your complete viewing history
   - History shows timestamps, part numbers, and direct links
   - Clear history anytime with one click

2. **Save Favorites**
   - Star any history item to add it to favorites
   - Favorites persist permanently until manually removed
   - Quick access to your most loved episodes/chapters

3. **Export/Import**
   - Backup all your data (preferences, history, favorites, stats)
   - Export creates a JSON file for safekeeping
   - Import to restore data on new devices or after browser data reset

## 🏗️ Technology Stack

### Frontend Framework
- **React 18.2** - Modern UI library with hooks and functional components
- **TypeScript 5.3** - Type-safe JavaScript with enhanced developer experience
- **React Router 7.9** - Client-side routing with nested routes

### UI & Styling
- **Material-UI 5.14** - Comprehensive React component library
- **Emotion** - CSS-in-JS styling solution
- **Responsive Design** - Mobile-first approach with breakpoint system

### Build & Development
- **Vite 5.0** - Next-generation frontend tooling for lightning-fast builds
- **Vitest** - Vite-native unit testing framework
- **ESLint** - Code quality and consistency enforcement
- **TypeScript Compiler** - Static type checking

### PWA & Performance
- **Vite PWA Plugin** - Service worker generation and PWA manifest
- **Workbox** - Intelligent caching strategies for offline support
- **Web Vitals** - Performance monitoring and optimization

## 📱 Progressive Web App

This application is a fully-featured PWA with:

- ✅ **Installable**: Add to home screen on any device
- ✅ **Offline Capable**: Works without internet after first load
- ✅ **App-like Experience**: Fullscreen mode with custom icons
- ✅ **Fast Loading**: Cached assets for instant performance
- ✅ **Responsive**: Optimized for all screen sizes

### Installing the PWA

**Desktop (Chrome/Edge)**
1. Visit the site
2. Click the install icon in the address bar
3. Click "Install" in the prompt

**Mobile (iOS/Android)**
1. Open in Safari (iOS) or Chrome (Android)
2. Tap the Share button
3. Select "Add to Home Screen"

## 🔐 Data & Privacy

- **Local Storage Only**: All user data is stored locally in your browser
- **No Tracking**: Zero analytics or tracking scripts
- **No Account Required**: Fully functional without sign-up
- **Data Ownership**: Export your data anytime in JSON format
- **Privacy First**: No cookies, no external data transmission

## 🧪 Testing

The project uses Vitest for modern, fast testing:

\`\`\`bash
# Run tests in watch mode
npm test

# Run tests with UI
npm run test:ui

# Run tests once (CI mode)
npm run test -- --run
\`\`\`

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### Development Workflow

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

### Coding Standards

- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all linters pass before committing

## 📝 Future Enhancements

- [ ] Search functionality for specific episodes/chapters
- [ ] Custom playlists for marathon watching
- [ ] Social sharing for favorite moments
- [ ] Achievement system for viewing milestones
- [ ] Mobile app versions (React Native)
- [ ] Integration with MyAnimeList and AniList
- [ ] Community-submitted JoJo facts and trivia
- [ ] Stand database with search and filters

## 🐛 Known Issues

- Service worker may require manual update on some browsers
- Manga links redirect to MangaDex which may have regional restrictions
- Crunchyroll links require active subscription for viewing

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

\`\`\`
MIT License

Copyright (c) 2025 Victor Williams

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
\`\`\`

## 👤 Author

**Victor Williams** (@Vaporjawn)

- 🌐 Website: [vaporjawn.github.io](https://vaporjawn.github.io/)
- 📧 Email: victor.williams.dev@gmail.com
- 📷 Instagram: [@Vaporjawn](https://instagram.com/Vaporjawn)
- 💻 GitHub: [@Vaporjawn](https://github.com/Vaporjawn)

## 💖 Support

If you find this project useful, consider supporting its development:

[![Support via PayPal](./src/assets/PayPal.png)](https://paypal.me/vaporjawn)

**[Support via PayPal](https://paypal.me/vaporjawn)** to help keep the project maintained and the servers running!

## 🙏 Acknowledgments

- **Hirohiko Araki** - Creator of JoJo's Bizarre Adventure
- **David Production** - Anime studio bringing JoJo to life
- **Crunchyroll** - Anime streaming platform
- **MangaDex** - Manga reading platform
- **Material-UI Team** - Excellent React component library
- **Vite Team** - Revolutionary build tool
- **JoJo Community** - For endless inspiration and support

## ⚡ Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Bundle Size**: ~200KB gzipped
- **Accessibility**: WCAG 2.1 AA compliant

---

<div align="center">

**[⬆ Back to Top](#-jojos-random-adventure)**

Made with ❤️ by [Victor Williams](https://github.com/Vaporjawn)

*This is a fan project and is not affiliated with or endorsed by Hirohiko Araki, Shueisha, or David Production.*

</div>
