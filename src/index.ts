import express,{Request,Response} from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Deplotyer welcome to the ec2 instance deployment code');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} hello from the ec2 instances`);
});