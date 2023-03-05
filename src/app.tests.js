import request from 'supertest';
import { describe, it, expect } from 'vitest';

import { StatusCodes } from 'http-status-codes';

import app from './app';

describe('GET /api/health', () => {
  it('should returns a success response', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toBe(StatusCodes.OK);
    expect(res.body.message).toBe('ok');
  });
});
