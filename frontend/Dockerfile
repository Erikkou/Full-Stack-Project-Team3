# frontend/Dockerfile
FROM node:20

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
USER node
CMD ["npm", "start"]