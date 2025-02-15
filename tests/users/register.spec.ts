import request from 'supertest';
import app from '../../src/app';

describe('Post /auth/register', () => {
    describe('Given all Feilds', () => {
        it('Should return the status code 201', async () => {
            // Arrange
            const userData = {
                firstName: 'Sumit',
                lastName: 'B',
                email: 'abc@gmail.com',
                password: 'secret',
            };

            //Act
            const response = await request(app)
                .post('/auth/register')
                .send(userData);

            // Assert
            expect(response.statusCode).toBe(201);
        });
        it('Should return valid json', async () => {
            // Arrange
            const userData = {
                firstName: 'Sumit',
                lastName: 'B',
                email: 'abc@gmail.com',
                password: 'secret',
            };

            //Act
            const response = await request(app)
                .post('/auth/register')
                .send(userData);

            // Assert
            expect(response.headers['content-type']).toEqual(
                expect.stringContaining('json'),
            );
        });
    });
    describe('Missing feilds', () => {});
});
