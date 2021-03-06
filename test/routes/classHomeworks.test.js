const tape = require('tape');
const supertest = require('supertest');
const { access } = require('./cookie.test');
const { dbBuild, dbFakeData } = require('../../server/database/config/build');

const app = require('../../server/app');

tape('Testing for subject Homework Route', (t) => {
  dbBuild()
    .then(dbFakeData)
    .then(() => {
      supertest(app)
        .post('/api/v1/subjects/2/homeworks/2')
        .send({ homeworkDate: '2019-08-03' })
        .expect(200)
        .expect('content-type', /json/)
        .set('Cookie', [`access=${access}`])
        .end((err, res) => {
          if (err) {
            t.error(err);
            t.end();
          } else {
            const actual = res.body.data;
            const expected = [{
              homework_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              urls: { resource1: 'https://www.github.com', resource2: 'https://www.github.com' },
            }];
            t.deepEqual(actual, expected, 'Test pass: All values must be the same');
            t.end();
          }
        });
    });
});
