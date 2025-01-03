#!/bin/bash

# Create public directory if it doesn't exist
mkdir -p public

# Download images
cd public

# Logo
curl -o logo.png "https://raw.githubusercontent.com/miriambarcenas/panathea/main/public/logo.png"

# Profile image
curl -o profile.jpg "https://raw.githubusercontent.com/miriambarcenas/panathea/main/public/profile.jpg"

# Favicon
curl -o favicon.ico "https://raw.githubusercontent.com/miriambarcenas/panathea/main/public/favicon.ico"

echo "Images downloaded successfully!" 