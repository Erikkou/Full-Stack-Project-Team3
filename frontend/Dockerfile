# frontend/Dockerfile
FROM node:16

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Build the app
RUN npm run build

# Expose port 3000 and start the app
EXPOSE 3000
CMD ["npm", "start"]