import express from 'express';
import userLoginController from './controllers/users/loginUser.controller';
import verifyLoginMiddleware from './middlewares/users/verifyLogin..middleware';
import usersRoutes from './routes/users/user.routes';

const app = express();
app.use(express.json());

app.use('/users', usersRoutes);
app.use('/login', verifyLoginMiddleware, userLoginController);

app.listen(3000);

export default app;
