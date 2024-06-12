import SearchBar from '../../../components/SearchBar';
import CatalogCard from '../../../components/CatalogCard';
import ButtonNextPage from '../../../components/ButtonNextPage';
import * as productService from '../../../services/product-service';
import { ProductDTO } from 'models/product';

import './styles.css';

export default function Catalog() {
  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />
        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {
            productService.findAll().map((product: ProductDTO) => (
               <CatalogCard key={product.id} product={product} />
            ))
          }
        </div>
        <ButtonNextPage />
      </section>
    </main>
  );
}