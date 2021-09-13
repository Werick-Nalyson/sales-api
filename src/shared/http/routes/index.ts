import { Router } from 'express';
import productsRouter from '@modules/Product/routes/product.routes';

const routes = Router();

routes.use('/products', productsRouter);

export default routes;
