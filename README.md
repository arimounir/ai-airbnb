<h1 align="center">
  Airbnb - MERN webapp
</h1>
<h2 align="center">
    Maestría en DevOps - UNIR
</h2>

<p align="center">
    Aplicación utilizada como ejemplo de evaluación para la TFM de la maestría.
</p>

<p align="center">
    Una aplicación de <a href="https://vitejs.dev">Vite</a> + <a href="https://reactjs.org">React</a>
</p>

<p align="center">
   Desplegada por Vercel
</p>

<p align="center">
    A <a href="https://vitejs.dev">Vite</a> + <a href="https://reactjs.org">React</a> starter template.
</p>

![Vite Template React](https://user-images.githubusercontent.com/48409548/130238925-9ffa2704-7e42-4d85-876d-44fefb6a1548.png)

## Estructura de directorios


```
ai-airbnb
├── .github
│   ├── workflows
│   │   ├── chatgpt-review.yml
│   │   ├── cypress-actions.yml
│   │   ├── magnifai.yml   
│   └── └── openai-pr-description.yml
├── api
│   ├── node_modules
│   ├── models
│   ├── index.js
│   ├── package.json
│   └── yarn.lock
└── client
    ├── cypress
    ├── node_modules
    ├── public
    ├── src
    ├── .gitignore
    ├── ai-test.js
    ├── cypress.config
    ├── index.html
    ├── openai.js
    ├── package-json
    ├── postcss.config.cjs
    ├── tailwind.config.cjs
    ├── vite.config.js
    └── yarn.lock
├── .gitignore
├── README.md
├── vercel.json
```

## Desarrollo

Para tener una copia del repositorio: 

```
git clone https://github.com/arimonuir/ai-airbnb.git
cd ai-airbnb
```

Hacerlo propio:

```
rm -rf .git && git init && npm init
git add .
git commit -m "Initial commit"
```

Instalar dependencias:

```
cd client
yarn install 
o
npm install
```

```
cd api
yarn install 
o
npm install
```

Iniciar aplicación:

```
cd client
npm run dev
```

Abrir http://localhost:5173 para visualizar el sitio.

#### Scripts disponibles

In this project, you can run the following scripts:

| Script        | Description                                           |
| ------------- | ----------------------------------------------------- |
| npm run dev   | Runs the app in the development mode.                 |
| npm run build | Builds the app for production to the `dist` folder.   |
| npm run preview | Runs Vercel preview build.                          |
| npm run cypress | Runs Cypress app.                                   |
| npm run e2e | Runs Cypress end to end tests on browser.               |
| npm run e2e:headless | Runs Cypress end to end tests on terminal.     |
| npm run component | Run Cypress component tests on browser.           |
| npm run component:headless | Run Cypress component tests on terminal. |
| npm run cypress:generator | Runs openai to generate cypress test code.|
| npm run review | Runs openai review code.                             |
