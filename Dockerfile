FROM node:22-alphine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 5000
CMD ["npm" "start"]
