FROM nginx:stable-alpine

# Copy the build output from the previous stage to Nginx's default HTML directory
COPY ./dist/ibagent-front/browser /usr/share/nginx/html

COPY ./config/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80