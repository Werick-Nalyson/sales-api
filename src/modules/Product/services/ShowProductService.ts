import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../entities/Product';
import ProductRepository from '../repositories/ProductRepository';

interface IRequest {
  id: number;
}

class ShowProductService {
  public async execute({ id }: IRequest): Promise<Product | undefined> {
    const productRepository = getCustomRepository(ProductRepository);

    const product = productRepository.findOne(id);

    if (!product) {
      throw new AppError('Product not found');
    }

    return product;
  }
}

export default ShowProductService;