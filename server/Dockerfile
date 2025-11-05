# Sử dụng Node.js image
FROM node:18

# Tạo thư mục làm việc
WORKDIR /app

# Copy file package.json và package-lock.json
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ code từ thư mục server vào container
COPY . .

# Expose port
EXPOSE 3001

# Chạy ứng dụng
CMD ["npm", "run", "start"]
