# Connect to CockroachDB Serverless using JavaScript and Koa

## How to Run this Code

To run the code in this folder, first install the node modules defined in `package.json` and `package-lock.json`:

```
npm install
```

Next, run using node:

```
node app.js
```

Next, open your browser to the port that the application is running on.

Open `http://localhost:3001` in your browser.

You should see the version of CockroachDB that is running on your cluster.

## Setting Up Your Own Project

To setup your own project, install the required modules:

```
npm install pg koa koa-router koa-logger
```

This will also add them to your `package.json` and `package-lock.json` files.