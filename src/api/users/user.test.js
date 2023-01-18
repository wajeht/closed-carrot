import request from 'supertest';
import { describe, it, expect } from 'vitest';
import { StatusCodes } from 'http-status-codes';

import app from '../../app.js';

describe('GET /api/username', () => {
  it('should returns a success response', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(StatusCodes.OK);
  });
});
