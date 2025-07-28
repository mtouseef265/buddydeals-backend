FROM node:20-alpine

WORKDIR /src

COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

RUN npm install -g @medusajs/medusa

COPY . .

# test 
EXPOSE 9000

CMD ["npm", "run", "dev"]
