# 1단계: 빌드 (Node.js 환경)
# 기존: FROM node:18-alpine AS build-stage
# 수정: 플랫폼을 명시해줍니다.
FROM --platform=$BUILDPLATFORM node:18-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 2단계: 실행 (Nginx 환경)
FROM nginx:stable-alpine
# 위에서 만든 설정 파일 복사
COPY nginx.conf /etc/nginx/conf.d/default.conf
# 빌드된 결과물만 Nginx로 복사
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]