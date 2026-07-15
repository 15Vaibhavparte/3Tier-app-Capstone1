# Use a secure, lightweight Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy dependency files first to leverage Docker layer caching
COPY package*.json ./

# Install only production dependencies to keep the image small
RUN npm install --only=production

# Copy the rest of your application code (index.js, DbConfig.js, TransactionService.js)
COPY . .

# Expose the internal port your application listens on
# (The AWS 3-Tier Workshop default is port 4000)
EXPOSE 4000

# Start the Node.js application
CMD ["node", "index.js"]