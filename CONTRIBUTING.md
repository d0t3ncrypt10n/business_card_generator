# Contributing to Digital Business Card Generator

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Help others learn and grow

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/business-card-generator.git`
3. Create a branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Test your changes
6. Commit: `git commit -m "Add: your feature description"`
7. Push: `git push origin feature/your-feature-name`
8. Create a Pull Request

## Development Setup

### Prerequisites
- Node.js v16+
- MongoDB
- Git

### Backend Setup
```bash
cd Backend
npm install
cp .env.example .env
# Edit .env with your configuration
npm run dev
```

### Frontend Setup
```bash
cd Frontend
npm install
cp .env.example .env
# Edit .env with your configuration
npm run dev
```

## Coding Standards

### JavaScript/React
- Use ES6+ features
- Follow React best practices
- Use functional components with hooks
- Keep components small and focused
- Use meaningful variable names
- Add comments for complex logic

### Code Style
- Use 2 spaces for indentation
- Use single quotes for strings
- Add semicolons
- Use camelCase for variables and functions
- Use PascalCase for components

### File Naming
- Components: `PascalCase.jsx`
- Utilities: `camelCase.js`
- Styles: `kebab-case.css`

## Commit Messages

Follow conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

Examples:
```
feat: add social media links to cards
fix: resolve image upload issue
docs: update installation instructions
```

## Pull Request Process

1. **Update Documentation**: Update README.md if needed
2. **Test Your Changes**: Ensure all features work
3. **Check Code Quality**: Run linters
4. **Write Clear Description**: Explain what and why
5. **Link Issues**: Reference related issues
6. **Request Review**: Tag maintainers

### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How to test the changes

## Screenshots (if applicable)
Add screenshots

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings
- [ ] Tests added/updated
```

## Feature Requests

1. Check existing issues first
2. Create a new issue with:
   - Clear title
   - Detailed description
   - Use cases
   - Mockups (if applicable)
3. Label as `enhancement`

## Bug Reports

Include:
- **Description**: What happened?
- **Expected Behavior**: What should happen?
- **Steps to Reproduce**: How to reproduce?
- **Environment**: OS, browser, versions
- **Screenshots**: If applicable
- **Error Messages**: Console logs

## Areas for Contribution

### High Priority
- [ ] Add unit tests
- [ ] Implement rate limiting
- [ ] Add email verification
- [ ] Improve error handling
- [ ] Add loading states

### Features
- [ ] Multiple card templates
- [ ] Card analytics
- [ ] Team/organization features
- [ ] vCard export
- [ ] Email signature generation
- [ ] Dark mode

### Improvements
- [ ] Performance optimization
- [ ] Accessibility improvements
- [ ] Mobile responsiveness
- [ ] SEO optimization
- [ ] Internationalization (i18n)

## Questions?

- Open an issue with the `question` label
- Check existing documentation
- Review closed issues

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Recognition

Contributors will be added to the README.md file.

Thank you for contributing! 🎉
