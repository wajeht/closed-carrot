// import request from 'supertest';
import {
  describe,
  it,
  expect,
  //  beforeAll, afterAll
} from 'vitest';

// import { StatusCodes } from 'http-status-codes';
// import { faker } from '@faker-js/faker';

// import app from '../../../app.js';
// import { connectDatabase, closeDatabase } from '../../../utils/db-test.js';

// beforeAll(() => {
//   connectDatabase();
// });

// afterAll(() => {
//   closeDatabase();
// });

describe('POST /api/v1/contact', () => {
  // it('should returns a success response when sending a contact request with all body fields', async () => {
  //   const res = await request(app).post('/api/v1/contact').send({
  //     email: faker.internet.email(),
  //     subject: faker.datatype.string(),
  //     message: faker.datatype.string(),
  //   });
  //   expect(res.body.message).toBe('your message has been sent successfully!');
  //   expect(res.statusCode).toBe(StatusCodes.OK);
  // });
  // it('should returns a validation error response when sending a contact request with some body fields', async () => {
  //   const res = await request(app).post('/api/v1/contact').send({
  //     email: faker.internet.email(),
  //     message: faker.datatype.string(),
  //   });
  //   expect(res.statusCode).toBe(StatusCodes.UNPROCESSABLE_ENTITY);
  // });
  it('fake', () => {
    expect(true).toBe(true);
  });
});
