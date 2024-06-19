```sh
# 레포지터리를 clone 후 빌드
docker build -t my-vite-app .
docker run -d -p 80:80 --name react_container my-vite-app
# http://localhost
```