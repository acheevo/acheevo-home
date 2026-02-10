# acheevo-home

A scalable React frontend template built with modern tools and best practices.

## Features

- ⚡ **Vite** - Lightning fast build tool
- ⚛️ **React 18** - Latest React with TypeScript
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📦 **Component Library** - Reusable UI components
- 🔧 **ESLint & TypeScript** - Code quality and type safety
- 🐳 **Docker** - Containerized deployment
- 🚀 **GitHub Actions** - CI/CD pipeline
- 📱 **Responsive Design** - Mobile-first approach

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Docker (optional)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd frontend-template
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env
```

4. Update the project name in `.env`:
```bash
PROJECT_NAME="Your Project Name"
VITE_APP_NAME="Your Project Name"
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # Basic UI components
│   ├── layout/         # Layout components
│   └── sections/       # Page sections
├── config/             # Configuration files
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
└── types/              # TypeScript type definitions
```

## Docker

### Development
```bash
docker-compose --profile dev up
```

### Production
```bash
docker-compose up
```

Or build manually:
```bash
docker build -t frontend-template .
docker run -p 3000:80 frontend-template
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Configuration

### Environment Variables

Create a `.env` file based on `.env.example`:

- `PROJECT_NAME` - The name of your project
- `VITE_APP_NAME` - App name displayed in the UI
- `NODE_ENV` - Environment (development/production)

### Customizing the Project Name

The project name is configurable through environment variables:

1. Update `.env` file with your project name
2. The name will be used throughout the application
3. In Docker, pass as environment variable: `-e PROJECT_NAME="My App"`

## GitHub Actions

The project includes automated workflows:

- **CI/CD Pipeline** - Runs tests, builds, and deploys
- **Dependency Updates** - Weekly automated dependency updates
- **Security Scanning** - Vulnerability checks
- **Docker Build** - Container image building and testing

## Best Practices

- **Component Structure** - Organized by feature and reusability
- **TypeScript** - Strict typing for better code quality
- **Responsive Design** - Mobile-first Tailwind CSS approach
- **Security** - Security headers and vulnerability scanning
- **Performance** - Optimized builds and caching
- **Accessibility** - Semantic HTML and ARIA labels

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.