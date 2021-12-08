// Use the node-postgres library
const { Pool, Client } = require('pg')

//
// CONFIGURATION
//

// Must be changed
const username = 'app' // change this
const password = 'password' // change this
const certdir = '/Users/jonstjohn' // change this to your home directory or the directory where your certs are
const cluster = 'sweet-donkey-123' // change this

// Might need to be changed
const database = 'defaultdb' // may need to change this
const host = 'free-tier.gcp-us-central1.cockroachlabs.cloud' // may need to change this

// Probably don't need to change this
const certname = 'root.crt'

//
// BUILD CONNECTION STRING AND CONNECT
//
// Create the connection string
const connectionString = 'postgresql://' + username + ':' + password + '@' + host + ':26257/' + database + '?sslmode=verify-full&sslrootcert=' + certdir + '/.postgresql/' + certname + '&options=--cluster%3D' + cluster
const pool = new Pool({
  connectionString,
})

//
// EXECUTE QUERY
//
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})