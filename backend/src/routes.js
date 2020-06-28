import { Router } from 'express';
import multer from 'multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import authMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';
import ProductController from './app/controllers/ProductController';
import RequestProductController from './app/controllers/RequestProductController';
import OfferecedProductsController from './app/controllers/OfferecedProductsController';
import NotificationController from './app/controllers/NotificationController';
const routes = new Router();
const upload = multer(multerConfig);
// rota para cadastrar um user
routes.post('/users', UserController.store);
// rota para cadastrar uma foto
routes.post('/files', upload.single('file'), FileController.store);
// rota para fazer login
routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);

//cadastro de produto
routes.post('/product', ProductController.store);
//mostra todos os produtos
routes.get('/product', ProductController.index);
// lista somente aqueles que cadastrei como pedidos
routes.get('/request', RequestProductController.index);
// retorn um produto pelo id para mais detalhes
routes.get('/product/:id', ProductController.details);
// lista somente aqueles que cadastrei como ofereido
routes.get('/offereced', OfferecedProductsController.index);
// coloca como reservado
routes.put('/product/:id', ProductController.select);

// para pegar as notificações
routes.get('/notifications', NotificationController.index);
// Todas as rotas que forem chamadas a partir daqui tem que ser autenticada

export default routes;
