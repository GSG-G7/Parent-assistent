const tape = require('tape');
const { dbFakeData, dbBuild } = require('../../server/database/config/build');
const { loginData } = require('../../server/database/quieres/login');

tape('testing for login qyuery', (t) => {
  const email = 'Ola200@gmail.com';
  dbBuild()
    .then(dbFakeData)
    .then(() => loginData(email))
    .then((res) => {
      t.deepEqual(res.rows[0].email, 'Ola200@gmail.com', 'should be the same');
      t.end();
    })
    .catch((err) => {
      t.error(err);
      t.end();
    });
});

tape.onFinish(() => process.exit(0));