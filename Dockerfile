# Using node 20 of linux alpine
FROM node:20-alpine

# create a folder in the container which will contain the code
WORKDIR /app

# copying the backbone of the project onto the container
COPY package*.json ./

# installing all the necessaries libs 
RUN npm install

# copying the remaining code (src currently) into the workdir for the container
COPY . .

# exposing port 3000
EXPOSE 3000

# Docker will start this command when the container is fully initialized
CMD ["node", "src/server.js"]
