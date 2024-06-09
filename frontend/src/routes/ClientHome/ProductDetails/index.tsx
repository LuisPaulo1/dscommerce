import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { ProductDTO } from "../../../models/product";

import "./styles.css";

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

export default function ProductDetails() {
  return (          
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard product={product} />
          <div className="dsc-btn-page-container">
            <ButtonPrimary text="Comprar" />
            <ButtonInverse text="Início" />
          </div>
        </section>
      </main>    
  );
}