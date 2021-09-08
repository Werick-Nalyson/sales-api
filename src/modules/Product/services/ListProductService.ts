import { getCustomRepository } from 'typeorm';
import Product from '../entities/Product';
import ProductRepository from '../repositories/ProductRepository';

class ListProductService {
  public async execute(): Promise<Product[]> {
    const productRepository = getCustomRepository(ProductRepository);

    const products = await productRepository.find();

    return products;
  }
}

export default ListProductService;
