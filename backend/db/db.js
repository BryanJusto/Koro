const pgp = require('pg-promise')();
const db = pgp('postgres://cszggaclkladfq:a7182eef5498e26eb87205355160ce5e18f3a69ac3f96e0fca2084b08d1bd586@ec2-174-129-253-169.compute-1.amazonaws.com:5432/d486ko92k4828h');
// const db = pgp('SQLKORA://postgres:123@localhost:3001/kora');

module.exports = db;
