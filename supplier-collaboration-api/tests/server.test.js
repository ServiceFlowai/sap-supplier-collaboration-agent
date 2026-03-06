const request = require('supertest');
const app = require('../server');

describe('POST /commitments', () => {
    it('responds with json', async () => {
        const response = await request(app)
            .post('/commitments')
            .set('Authorization', 'Bearer fake-token')
            .send({ supplierId: 1, commitment: [] });
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Commitment received');
    });
});