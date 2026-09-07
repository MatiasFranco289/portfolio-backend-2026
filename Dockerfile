# Development image for portfolio-backend-2026
# Node version matches the local runtime (v24)
FROM node:24-alpine

# Working directory inside the container
WORKDIR /app

# Install dependencies first for better layer caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy application source code
COPY . .

# Run the dev server with hot reload (tsx watch)
CMD ["npm", "run", "dev"]