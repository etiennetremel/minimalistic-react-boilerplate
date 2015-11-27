A minimalistic React boilerplate
================================

Why not using [React Starter Kit](https://github.com/kriasoft/react-starter-kit) or [React Static Boilerplate](https://github.com/koistya/react-static-boilerplate)? I was in a need to have something very very simple, as minimalist as possible, no server side rendering, no webpack, no gulp, etc.

__Features:__

* Babel ES6
* React 0.14.3
* CSSNext and CSSNano
* Linting
* Unit tests using Mocha/Chai
* Docker image with NGINX ready to be deployed

### Start developing

```bash
npm start
```

### Build

```bash
npm run build
```

### Run unit tests

```bash
npm test
```

### Build and run Docker image

Docker image is based on NGINX to serve static files from the build directory.

```bash
# Build Docker image
docker build -t my-image .

# Run image
docker run -t -i -p 80:80 my-image
```
