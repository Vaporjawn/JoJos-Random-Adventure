#!/bin/bash

# Build the project
npm run build

# Copy index.html to 200.html for Surge.sh SPA routing
cp dist/index.html dist/200.html

echo "Build completed and 200.html created for Surge.sh"
