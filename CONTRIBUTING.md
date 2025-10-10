# Contributing to JoJo's Bizarre Adventure Randomizer

First off, thanks for taking the time to contribute! 🎭

The following is a set of guidelines for contributing to JoJo's Bizarre Adventure Randomizer. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [victor.williams.dev@gmail.com](mailto:victor.williams.dev@gmail.com).

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible.
* **Provide specific examples to demonstrate the steps**.
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem.

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**.
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Explain why this enhancement would be useful** to most JoJo's Bizarre Adventure Randomizer users.

### Pull Requests

* Fill in the required template
* Do not include issue numbers in the PR title
* Include screenshots and animated GIFs in your pull request whenever possible
* Follow the JavaScript/TypeScript styleguide
* Include thoughtfully-worded, well-structured tests
* Document new code based on the Documentation Styleguide
* End all files with a newline

## Development Process

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR-USERNAME/JoJos-Random-Adventure.git`
3. Create a new branch: `git checkout -b my-feature-branch`
4. Install dependencies: `npm install`
5. Start the development server: `npm run dev`

### Making Changes

1. Make your changes in the new branch
2. Add tests for your changes if applicable
3. Run tests: `npm run test`
4. Run linting: `npm run lint`
5. Fix any linting errors: `npm run lint:fix`
6. Commit your changes with a clear message
7. Push to your fork and submit a pull request

### Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

Example:
```
Add keyboard shortcut for random wiki

- Implements 'W' key shortcut for opening random wiki page
- Updates keyboard shortcuts help modal
- Adds corresponding test coverage

Fixes #123
```

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

### JavaScript/TypeScript Styleguide

* Use TypeScript for all new code
* Follow the existing ESLint configuration
* Use descriptive variable and function names
* Add JSDoc comments for complex functions
* Use async/await instead of promises when possible
* Use Material UI components and follow the existing theming patterns

### React Styleguide

* Use functional components with hooks
* Use TypeScript interfaces for props
* Use Material UI components and theming
* Follow the existing file structure and naming conventions
* Use React.memo for performance optimization when appropriate
* Use useCallback and useMemo judiciously

### CSS/Styling Styleguide

* Use Material UI's styling system (sx prop, styled components, or theme)
* Prefer theme-based values over hardcoded values
* Use responsive design patterns
* Follow the existing color palette and design tokens

## Testing

* Write tests for new functionality
* Update tests when modifying existing functionality
* Use descriptive test names
* Test both happy paths and error cases
* Use React Testing Library for component tests

## Documentation

* Update README.md if you change functionality
* Add JSDoc comments for complex functions
* Update type definitions as needed
* Document any new environment variables or configuration

## Community

* Be welcoming and inclusive
* Help others in issues and discussions
* Share knowledge and best practices
* Celebrate contributions from all community members

## Recognition

Contributors will be recognized in the project README and release notes.

## Getting Help

If you need help, you can:

* Create an issue with the "question" label
* Join discussions in existing issues
* Contact the maintainer at [victor.williams.dev@gmail.com](mailto:victor.williams.dev@gmail.com)

Thank you for contributing to JoJo's Bizarre Adventure Randomizer! 🌟