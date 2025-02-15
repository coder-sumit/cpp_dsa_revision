import 'reflect-metadata';
import express from 'express';
import logger from './config/logger';
import { HttpError } from 'http-errors';
import { Request, Response, NextFunction } from 'express';
const app = express();
import AuthRoutes from './routes/auth';

app.get('/', async (req, res) => {
    res.status(200).send('Welcome to Auth Service!');
});

app.use('/auth', AuthRoutes);

// global error handler
// eslint-disable-next-line no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message);
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        errors: [
            {
                type: err.name,
                msg: err.message,
                path: '',
                location: '',
            },
        ],
    });
});

export default app;
