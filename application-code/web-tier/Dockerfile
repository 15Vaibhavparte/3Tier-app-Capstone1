# ==========================================
# STAGE 1: Build the React application
# ==========================================
FROM node:20-alpine AS build-stage

# Set the working directory inside the container
WORKDIR /app

# Copy dependency files first (for efficient Docker caching)
COPY package*.json ./

# Install all dependencies (including dev tools needed to build)
RUN npm install

# Copy the rest of your raw source code
COPY . .

# Compile the React code into static files
RUN npm run build

# ==========================================
# STAGE 2: Serve with Nginx
# ==========================================
FROM nginx:alpine

# Remove default Nginx placeholder files
RUN rm -rf /usr/share/nginx/html/*

# Copy the compiled files from Stage 1 into the Nginx web root
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose the standard web port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]