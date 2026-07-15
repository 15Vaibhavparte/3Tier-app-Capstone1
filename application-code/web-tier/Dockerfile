# Use a high-performance, lightweight Nginx web server base image
FROM nginx:alpine

# Clean out any default fallback static files inside Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy your pre-compiled production build folder directly into Nginx's HTML folder
COPY ./build /usr/share/nginx/html

# Expose port 80 for serving the static web assets
EXPOSE 80

# Run Nginx in the foreground so the container stays active
CMD ["nginx", "-g", "daemon off;"]