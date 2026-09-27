# =========================
# React build
# =========================
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build


# =========================
# Wodby Nginx for brotil comp
# =========================
FROM wodby/nginx:1.31

COPY --from=builder /app/dist /var/www/html

COPY nginx.conf /etc/nginx/nginx.conf:ro

# for gzip comp

# FROM nginx:alpine
# COPY --from=builder /app/dist /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf
