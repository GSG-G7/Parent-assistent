const tape = require('tape');
const supertest = require('supertest');
const { access } = require('./cookie.test');
const { dbBuild, dbFakeData } = require('../../server/database/config/build');

const app = require('../../server/app');

tape('Testing for classActivites Route', (t) => {
  dbBuild()
    .then(() => dbFakeData())
    .then(() => {
      supertest(app)
        .get('/api/v1/subject/1/activities/1')
        .expect(200)
        .expect('content-type', /json/)
        .set('Cookie', [`access=${access}`])
        .end((err, res) => {
          if (err) {
            t.error(err);
            t.end();
          } else {
            const actual = Object.keys(res.body.allActivities[0]);
            const expected = ['activity_date', 'description', 'title'];
            t.deepEqual(actual, expected, 'Testing pass: All keys must equal expected');
            t.end();
          }
        });
    });
});
