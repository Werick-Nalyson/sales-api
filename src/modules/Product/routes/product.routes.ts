import { Router } from 'express';
import ProductsController from '../controller/ProductsController';

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.post('/', productsController.create);
productsRouter.get('/', productsController.index);
productsRouter.get('/:id', productsController.show);
productsRouter.patch('/:id', productsController.update);
productsRouter.delete('/:id', productsController.delete);

export default productsRouter;
