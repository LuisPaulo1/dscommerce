import SearchBar from '../../../components/SearchBar';
import CatalogCard from '../../../components/CatalogCard';
import ButtonNextPage from '../../../components/ButtonNextPage';
import { ProductDTO } from 'models/product';

import './styles.css';

const product: ProductDTO = {
  id: 1,
  name: "Computador Desktop - Intel Core i7",
  description: "O computador desktop ideal para você que busca desempenho e qualidade.",
  price: 5000,
  imgUrl: "https://source.unsplash.com/300x300/?computer",
  categories: [
    { id: 1, name: "Computadores" },
    { id: 2, name: "Eletrônicos" },
    { id: 3, name: "Importados" }
  ]
};

export default function Catalog() {
  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />
        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
        </div>
        <ButtonNextPage />
      </section>
    </main>
  );
}