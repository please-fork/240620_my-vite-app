# 1단계: 빌드 단계
FROM node:18 AS build

# 작업 디렉토리를 설정합니다.
WORKDIR /app

# package.json을 복사합니다.
COPY package.json ./

# 프로젝트의 의존성을 설치합니다.
RUN npm install

# 소스 코드를 복사합니다.
COPY . .

# 프로젝트를 빌드합니다.
RUN npm run build

# 2단계: 실행 단계
FROM nginx:alpine

# Nginx의 기본 설정 파일을 제거합니다.
RUN rm -rf /usr/share/nginx/html/*

# 빌드된 파일을 Nginx의 웹 루트로 복사합니다.
COPY --from=build /app/dist /usr/share/nginx/html

# 사용자 정의 Nginx 설정 파일을 복사합니다.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 컨테이너의 80 포트를 노출합니다.
EXPOSE 80

# Nginx를 실행합니다.
CMD ["nginx", "-g", "daemon off;"]
