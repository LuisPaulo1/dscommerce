import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { ProductDTO } from "../../models/product";

import "./styles.css";

const product: ProductDTO = {
  id: 1,
  name: "Computador Desktop - Intel Core i7",
  description: "O computador desktop ideal para você que busca desempenho e qualidade.",
  price: 5000,
  imgUrl: "https://source.unsplash.com/300x300/?computer",
  categories: [
    { id: 1, name: "Computadores" },
    { id: 2, name: "Eletrônicos" }
  ]
};

export default function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard product={product} />
          <div className="dsc-btn-page-container">
            <ButtonPrimary />
            <ButtonInverse />
          </div>
        </section>
      </main>
    </>
  );
}