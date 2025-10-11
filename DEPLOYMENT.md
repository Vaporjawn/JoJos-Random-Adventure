# Deployment Guide

This project is configured to deploy to both **Surge.sh** and **GitHub Pages**.

## 🚀 Live Sites

- **Surge.sh**: https://jojos-random-adventure.surge.sh
- **GitHub Pages**: https://vaporjawn.github.io/JoJos-Random-Adventure/

## Automated Deployment (Recommended)

### Setup (One-time only)

1. **Get your Surge token:**
   ```bash
   surge token
   ```
   Copy the token that's displayed.

2. **Add the token to GitHub Secrets:**
   - Go to your GitHub repository
   - Navigate to Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `SURGE_TOKEN`
   - Value: Paste your Surge token
   - Click "Add secret"

3. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `(root)`
   - Click "Save"

### How it Works

Once configured, every time you push to the `main` branch:
- GitHub Actions automatically builds your project
- Deploys to Surge.sh at https://jojos-random-adventure.surge.sh
- Deploys to GitHub Pages at https://vaporjawn.github.io/JoJos-Random-Adventure/

**Just commit and push - deployment is automatic!**

```bash
git add .
git commit -m "Your changes"
git push origin main
```

## Manual Deployment

If you prefer to deploy manually:

### Deploy to both platforms:
```bash
npm run deploy
```

### Deploy to Surge.sh only:
```bash
npm run deploy:surge
```

### Deploy to GitHub Pages only:
```bash
npm run deploy:gh-pages
```

## First-Time Surge Setup

If you haven't used Surge before:

1. **Create a Surge account:**
   ```bash
   surge login
   ```

2. **Deploy:**
   ```bash
   npm run deploy:surge
   ```

## Troubleshooting

### Surge deployment fails
- Make sure you're logged in: `surge login`
- Check your token: `surge token`
- Verify the domain is available: `surge list`

### GitHub Pages shows 404
- Wait a few minutes after deployment
- Check GitHub Pages settings are correct
- Verify the `gh-pages` branch was created
- Check the GitHub Actions workflow completed successfully

### Routes don't work on deployed site
- This is configured correctly for both platforms
- Surge: Uses 200.html for SPA routing
- GitHub Pages: Uses base path `/JoJos-Random-Adventure/`

## Development Mode

The app automatically detects the environment:
- **Development**: Uses base path `/`
- **Production**: Uses base path `/JoJos-Random-Adventure/` for GitHub Pages

Surge.sh deployment is configured to work with the root path.
