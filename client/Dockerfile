FROM node as build
RUN npm i -g typescript

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . ./
RUN tsc main.ts

FROM nginx:alpine
COPY --from=build /usr/src/app /usr/share/nginx/html
COPY config/site.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
