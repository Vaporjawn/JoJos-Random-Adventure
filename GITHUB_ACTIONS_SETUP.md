# GitHub Actions Setup Guide

## One-Time Setup Required

To enable automated deployments, you need to add your Surge token to GitHub Secrets.

### Your Surge Token
```
e117e3ef550f7b8559595f4b251936b8
```

### Steps to Add Secret to GitHub

1. **Go to your GitHub repository**
   - Navigate to: https://github.com/Vaporjawn/JoJos-Random-Adventure

2. **Access Settings**
   - Click on "Settings" tab (top right)

3. **Navigate to Secrets**
   - In the left sidebar, click "Secrets and variables"
   - Click "Actions"

4. **Add New Secret**
   - Click "New repository secret" button
   - **Name**: `SURGE_TOKEN`
   - **Value**: `e117e3ef550f7b8559595f4b251936b8`
   - Click "Add secret"

5. **Verify GitHub Pages is Enabled**
   - Go to Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `gh-pages` / `(root)`
   - Click "Save"

## That's It!

Once the secret is added, every push to `main` will automatically:
1. Build the project
2. Deploy to Surge.sh at https://jojos-random-adventure.surge.sh
3. Deploy to GitHub Pages at https://vaporjawn.github.io/JoJos-Random-Adventure/

## Verify Deployment

After your next push, you can check the deployment status:
- Go to the "Actions" tab in your GitHub repository
- Watch the "Deploy to Surge.sh and GitHub Pages" workflow run
- Once completed (green checkmark), both sites will be updated!

## Manual Deployment (Alternative)

If you prefer manual deployment instead of automatic:

```bash
# Deploy to both platforms
npm run deploy

# Or deploy individually
npm run deploy:surge
npm run deploy:gh-pages
```
