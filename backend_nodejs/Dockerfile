FROM node:16
# Chuẩn bị môi trường nodejs


WORKDIR /solo/backend
# Docker sẽ lưu source vào thư mục này

COPY package*.json ./

RUN npm install

RUN npm install -g @babel/core @babel/cli @babel/node @babel/plugin-transform-runtime @babel/polyfill @babel/preset-env @babel/runtime

COPY . .

RUN npm run build-src 
CMD ["npm", "run", "build"]

# docker build --tag node-docker .
# docker run -p 3000:3000 -d node-docker    