#!/bin/bash
set -e

# Navigate to the frontend directory
cd "$(dirname "$0")/frontend"

# Install dependencies and build
npm install
npm run build
