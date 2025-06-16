# Stage 1: Build the React app
FROM node:20 AS builder

WORKDIR /app

# Copy only the package files first for better caching
COPY package.json package-lock.json ./

# Install ALL dependencies (including devDependencies) for build
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the built app with a lightweight web server
FROM node:20-slim AS production

WORKDIR /app

# Install 'serve' to serve the build directory
RUN npm install -g serve

# Copy the build output from the previous stage
COPY --from=builder /app/build ./build

# Expose port 3000 (default for 'serve')
EXPOSE 3000

# Start the app
CMD ["serve", "-s", "build", "-l", "3000"] 