# Food Order application using NuxtJS, Vuex, Vuetify and Tailwindcss

> A SPA built using NuxtJS, Vuex, Vuetify and Tailwindcss which demonstrates use of Vuex for ordering food.

[Live Demo](https://food-service-demo.netlify.app/)

## Screenshots

![Image of Home Page Light Theme](/static/main-light.png)

![Image of Home Page Dark Theme](/static/main-dark.png)

![Image of Home Page with items in cart](/static/main-light-items-in-cart.png)

![Image of Cart Page Light Theme](/static/cart-light.png)

## Build Setup

1. With Docker
    - Build docker container

    ```bash docker build -t npu-food .  ```

    - Run container
    ```bash docker run -it -p 5000:5000 npu-food```

    - visit ``` localhost:5000```

2. Without Docker

Clone this repository and run:

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
