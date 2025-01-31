# use the official NodeJs image as our base 
FROM node:18

#set the working directory inside the container 
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# install app dependencies
RUN npm install

# Copy the rest of our source code into the container
COPY . .

# Expose the port the app will run on
EXPOSE 5501

# The command to run our app
CMD ["npm", "run", "dev"]