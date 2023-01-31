import * as dotenv from 'dotenv';
dotenv.config();

import express, { response } from 'express';

const app = express();

const PORT = process.env.PORT;

// es5
// function example() {
//     console.log('hello world')
// }

// // es6
// const example2 = () => {
//     console.log('hello world')
// }

// req, res
// @route GET /status
// @desc Check server status
app.get('/status', (request, response) => {
    response.send({
        status: 200,
        success: true,
        message: 'Server is healty',
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

