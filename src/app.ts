import express from 'express';
import logger from './config/logger';
import { HttpError } from 'http-errors';
import { Request, Response, NextFunction } from 'express';
const app = express();

app.get('/', async (req, res) => {
    res.send('Welcome to Auth Service!');
});

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
