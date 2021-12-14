# Connection to CockroachDB Serverless using TypeScript and Knex

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

You should see the version of CockroachDB that is running on your cluster.

## Setting Up Your Own Project

To setup your own project, install the required modules:

```
npm i pg knex @types/node @types/pg @types/knex
```

This will also add them to your `package.json` and `package-lock.json` files.