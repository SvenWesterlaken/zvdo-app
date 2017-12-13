const neo4j = require('neo4j-driver').v1;
const config = require('../config/env.js');

const db = new neo4j.driver(config.neo4j.url, neo4j.auth.basic(config.neo4j.username, config.neo4j.password));

const session = db.session();

const query = "CREATE (:Stroke {length: 50, stroke: 'vlinderslag'})" +
" CREATE (:Stroke {length: 100, stroke: 'vlinderslag'})" +
" CREATE (:Stroke {length: 200, stroke: 'vlinderslag'})" +
" CREATE (:Stroke {length: 50, stroke: 'rugslag'})" +
" CREATE (:Stroke {length: 100, stroke: 'rugslag'})" +
" CREATE (:Stroke {length: 200, stroke: 'rugslag'})" +
" CREATE (:Stroke {length: 50, stroke: 'schoolslag'})" +
" CREATE (:Stroke {length: 100, stroke: 'schoolslag'})" +
" CREATE (:Stroke {length: 200, stroke: 'schoolslag'})" +
" CREATE (:Stroke {length: 100, stroke: 'wisselslag'})" +
" CREATE (:Stroke {length: 200, stroke: 'wisselslag'})" +
" CREATE (:Stroke {length: 400, stroke: 'wisselslag'})" +
" CREATE (:Stroke {length: 25, stroke: 'vlinderslag'})" +
" CREATE (:Stroke {length: 25, stroke: 'rugslag'})" +
" CREATE (:Stroke {length: 25, stroke: 'schoolslag'})" +
" CREATE (:Stroke {length: 25, stroke: 'vrijeslag'})" +
" CREATE (:Stroke {length: 50, stroke: 'vrijeslag'})" +
" CREATE (:Stroke {length: 100, stroke: 'vrijeslag'})" +
" CREATE (:Stroke {length: 200, stroke: 'vrijeslag'})" +
" CREATE (:Stroke {length: 400, stroke: 'vrijeslag'})" +
" CREATE (:Stroke {length: 800, stroke: 'vrijeslag'})" +
" CREATE (:Stroke {length: 1500, stroke: 'vrijeslag'})"

session.run('MATCH (n:Stroke) RETURN count(n);', {})
.catch(err => console.log(err)).then((result) => {
  session.close();

  if (result.records[0] != 22) {
    session.run(query, {}).then((result) => {
      session.close()
      console.log('Strokes updated');
    });
  } else {
    console.log('Strokes already filled');
  }

})

module.exports = session;
