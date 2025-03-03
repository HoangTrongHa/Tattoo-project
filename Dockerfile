# Sử dụng hình ảnh Node.js chính thức với Alpine Linux (nhẹ)
FROM node:18-alpine

# Đặt thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json vào container
COPY package.json package-lock.json ./

# Cài đặt dependencies
RUN npm install --frozen-lockfile

# Sao chép toàn bộ code dự án vào container
COPY . .

# Biên dịch Next.js (nếu deploy ở mode Production)
RUN npm run build

# Thiết lập biến môi trường
ENV NODE_ENV=production

# Mở cổng mặc định của Next.js
EXPOSE 3000

# Chạy ứng dụng Next.js
CMD ["npm", "start"]