//require('dotenv').config();

const env = {
  port: process.env.PORT || 8080,
  allowOrigin: process.env.ALLOW_ORIGIN || '*',
  secretkey: process.env.DB_SECRET_KEY || "secretkeytestdata-app-510783"
}

env.mongo = {
  host: process.env.MONGO_HOST || '127.0.0.1',
  database: process.env.MONGO_DB || 'zvdo74',
  test: process.env.MONGO_TEST || 'zvdo74-test',
  options: {
    useMongoClient: true,
    poolSize: 10,
    user: process.env.MONGO_USER || '',
    pass: process.env.MONGO_PASS || ''
  }
}

env.neo4j = {
  username: process.env.NEO_USER || 'neo4j',
  password: process.env.NEO_PASS || 'admin',
  url: process.env.NEO_URL || 'bolt://127.0.0.1',
  port: process.env.NEO_PORT || '7687'
}

module.exports = env;
