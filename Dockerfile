FROM node:14.1-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

ENV PATH /app/node_modules/.bin:$PATH

COPY . ./

RUN npm run build


#production environment
# FROM nginx:stable-alpine
# COPY --from=builder /app/build /usr/share/nginx/html
# # RUN rm /etc/nginx/conf.d/default.conf
# COPY ./nginx.config /etc/nginx/conf.d/default.conf
# CMD ["nginx", "-g", "daemon off;"]

FROM nginx:1.17-alpine
RUN apk --no-cache add curl
RUN curl -L https://github.com/a8m/envsubst/releases/download/v1.1.0/envsubst-`uname -s`-`uname -m` -o envsubst && \
    chmod +x envsubst && \
    mv envsubst /usr/local/bin
COPY ./nginx.config /etc/nginx/nginx.template
CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/nginx.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
COPY --from=builder /app/build /usr/share/nginx/html