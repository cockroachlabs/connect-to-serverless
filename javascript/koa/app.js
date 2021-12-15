// To run:
// npm install
// node app.js

// Import the requirements
const Koa = require('koa');
const Router = require('koa-router');
const Logger = require('koa-logger');
const { Pool } = require('pg')

//
// CONFIGURATION
//
// The configuration paramater can be set directly in the code by changing the string values
// or they can be set as environment variables.
// E.g., on Mac OSX or Linux, use 'export CRDB_USERNAME=app' to set it as an environment variable
//

// Must be changed
const username = process.env.CRDB_USERNAME  || 'app' // database username
const password = process.env.CRDB_PASSWORD  || 'password' // database password
const certpath = process.env.CRDB_CERTPATH  || '/Users/jonstjohn/.postgresql/root.crt' // path to root certificate
const cluster  = process.env.CRDB_CLUSTER   || 'sweet-donkey-123' // cluster name with the number identifier

// Might need to be changed
const database = process.env.CRDB_DATABASE  || 'defaultdb' // database
const host     = process.env.CRDB_HOST      || 'free-tier.gcp-us-central1.cockroachlabs.cloud' // cluster host

//
// BUILD CONNECTION STRING AND CONNECT
//
// Create the connection string
const connectionString = 'postgresql://' + // use the postgresql wire protocol
    username +                       // username
    ':' +                            // separator between username and password
    password +                       // password
    '@' +                            // separator between username/password and port
    host +                           // host
    ':' +                            // separator between host and port
    '26257' +                        // port, CockroachDB Serverless always uses 26257
    '/' +                            // separator between port and database
    database +                       // database
    '?' +                            // separator for url parameters
    'sslmode=verify-full' +          // always use verify-full for CockroachDB Serverless
    '&' +                            // url parameter separator
    'sslrootcert=' + certpath +      // full path to ca certificate 
    '&' +                            // url parameter separator
    'options=--cluster%3D' + cluster // cluster name is passed via the options url parameter



const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
  const { rows } = await ctx.app.pool.query('SELECT version()')
  ctx.body = rows[0].version;
});

app.use(Logger());
app.use(router.routes()).use(router.allowedMethods());

app.pool = new Pool({
  connectionString,
})

// Listen the port
app.listen(3001, () => {
  console.log('Server running on port 3001');
});
