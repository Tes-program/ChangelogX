import express from 'express';
import router from './router';

const app = express();

app.get('/', (req, res) => {
    console.log('Hello World!');
    res.json({ message: 'Hello World!' });
    });

app.use('/api', router);


export default app;