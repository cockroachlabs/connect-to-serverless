// Use the node-postgres library
import { Pool, Client } from 'pg';

//
// CONFIGURATION
//

// Must be changed
const username = process.env.CRDB_USERNAME || 'app' // change this
const password = process.env.CRDB_PASSWORD || 'password' // change this
const certdir = process.env.CRDB_CERTDIR || '/Users/jonstjohn' // change this to your home directory or the directory where your certs are
const cluster = process.env.CRDB_CLUSTER || 'sweet-donkey-123' // change this

// Might need to be changed
const database = process.env.CRDB_DATABASE || 'defaultdb' // may need to change this
const host = process.env.CRDB_HOST || 'free-tier.gcp-us-central1.cockroachlabs.cloud' // may need to change this

// Probably don't need to change this
const certname = process.env.CRDB_CERTNAME || 'root.crt'

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