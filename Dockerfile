# Dockerfile that contains a simple nginx deployment for the frontend application

FROM nginx:1.29-alpine

# Copy nginx configuration file
COPY default.conf.template /etc/nginx/templates/default.conf.template

# Copy the built frontend application from the build stage
COPY static/ /usr/share/nginx/html

# Set default environment variable for PORT
ENV PORT=8080
