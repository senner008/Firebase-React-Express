FROM node:alpine as builder
WORKDIR /app
COPY /react/package*.json ./
RUN npm install
COPY /react/. .
RUN npm run build

FROM node:alpine
WORKDIR /app
COPY /admin/package*.json ./
RUN npm install
COPY /admin/. .
EXPOSE 5000
COPY --from=builder /app/build /app/src/build

CMD ["npm", "start"]