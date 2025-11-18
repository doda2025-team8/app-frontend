# app-frontend

This repo hosts the code of the frontend of our application

## Supported arguments

- **PORT** - Set the port used by nginx (default is `8080`)

## Building the container

```bash
docker build -t app-frontend .
```

## Running the container

```bash
docker run -p 8080:8080 app-frontend
```
