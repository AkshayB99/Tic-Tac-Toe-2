FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source
COPY . .

# Expose app port (change if needed)
EXPOSE 5173

# Start application
CMD ["npm", "run", "dev", "--", "--host"]
