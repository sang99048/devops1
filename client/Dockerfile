# client/Dockerfile
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Tăng heap size cho Node (2GB)
ENV NODE_OPTIONS=--max-old-space-size=2048

RUN npm run build

FROM nginx:1.25-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
