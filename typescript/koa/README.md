# Connect to CockroachDB Serverless using TypeScript and Koa

## How to Run this Code

To run the code in this folder, first install the node modules defined in `package.json` and `package-lock.json`:

```
npm install
```

Next, compile the TypeScript and run using node:


```
tsc && node dist/app.js
```

This command requires the TypeScript compiler (`tsc`).

Next, open your browser to the port that the application is running on.

Open `http://localhost:3004` in your browser.

You should see the version of CockroachDB that is running on your cluster.

## Setting Up Your Own Project

To setup your own project, install the required modules:

```
npm install pg koa koa-router koa-logger @types/node @types/pg @types/koa @types/koa-router @types/koa-logger
```

This will also add them to your `package.json` and `package-lock.json` files.