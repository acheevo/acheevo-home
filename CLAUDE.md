# Claude Development Context

This file contains important context for Claude when working on this project.

## Project Overview

This is a scalable React frontend template built with modern tools and best practices. The project serves a landing page and is designed to be easily customizable and extensible.

## Technology Stack

- **React 18** with TypeScript for component development
- **Vite** as the build tool and development server
- **Tailwind CSS** for styling with utility-first approach
- **ESLint** for code linting and quality
- **Docker** for containerization
- **GitHub Actions** for CI/CD

## Key Commands

### Development
- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm run type-check` - Run TypeScript checking
- `npm run lint` - Run ESLint

### Docker
- `docker-compose up` - Run production container
- `docker-compose --profile dev up` - Run development container

## Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components (Button, Container)
│   ├── layout/       # Layout components (Header, Footer)
│   └── sections/     # Page sections (Hero)
├── config/           # App configuration with environment variables
├── utils/            # Utility functions (cn for className merging)
└── types/            # TypeScript type definitions
```

## Configuration

### Project Configuration
The project is configurable via environment variables:
- `PROJECT_NAME` - Used in Docker and build processes
- `APP_NAME` - Used in the React application UI
- `PORT` - Development server and production port (default: 3000)

### Environment Files
- `.env.example` - Template for environment variables
- `.env` - Local environment variables (git-ignored)

## Component Patterns

### UI Components
- Located in `src/components/ui/`
- Use forwardRef for proper ref handling
- Accept className prop for styling customization
- Use TypeScript interfaces for props

### Styling
- Use Tailwind CSS utility classes
- Custom utilities defined in `src/index.css`
- Use `cn()` utility from `src/utils/cn.ts` for conditional classes

## Docker Setup

### Production Dockerfile
- Multi-stage build with Node.js and Nginx
- Security-focused with non-root user
- Optimized for production deployment

### Development Dockerfile
- Single stage for development
- Hot reload support
- Volume mounts for live editing

## CI/CD

### GitHub Actions Workflows
- `ci.yml` - Main CI/CD pipeline with testing, building, and deployment
- `dependency-update.yml` - Automated weekly dependency updates

### Pipeline Features
- TypeScript type checking
- ESLint code quality checks
- Docker image building and testing
- Security vulnerability scanning
- Automated dependency updates

## Development Guidelines

1. **Components**: Create reusable components in appropriate directories
2. **TypeScript**: Use strict typing and interfaces
3. **Styling**: Follow Tailwind utility-first approach
4. **Testing**: Run type-check and lint before committing
5. **Docker**: Test both development and production containers
6. **Environment**: Use environment variables for configuration

## Known Issues

- TypeScript strict mode may show some warnings in the IDE
- npm audit may show some moderate vulnerabilities in development dependencies
- These don't affect the production build or runtime security

## Future Enhancements

- Add testing framework (Jest/Vitest)
- Add component documentation (Storybook)
- Add state management (Zustand/Redux)
- Add routing (React Router)
- Add API integration utilities