import request from 'supertest';

import { app } from '../../app';

it('returns a 201 of successful signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'dancud@email.com',
      password: 'password',
    })
    .expect(201);
});

it('returns a 400 with an invalid email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'dancud@',
      password: 'password',
    })
    .expect(400);
});

it('returns a 400 with an invalid password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'dancud@email.com',
      password: 'p',
    })
    .expect(400);
});

it('returns a 400 with missing email and/or password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({ email: 'dancud@email.com' })
    .expect(400);
  await request(app)
    .post('/api/users/signup')
    .send({ password: 'password' })
    .expect(400);
});

it('disallows duplicate emails', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'dancud@email.com',
      password: 'password',
    })
    .expect(201);
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'dancud@email.com',
      password: 'password',
    })
    .expect(400);
});

it('sets a cookie after successful singup', async () => {
  const response = await request(app)
    .post('/api/users/signup')
    .send({
      email: 'dancud@email.com',
      password: 'password',
    })
    .expect(201);

  expect(response.get('Set-Cookie')).toBeDefined();
});
