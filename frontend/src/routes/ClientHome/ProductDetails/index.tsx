import { useNavigate, useParams } from "react-router-dom";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductDTO } from "models/product";
import * as productService from '../../../services/product-service';
import * as cartService from '../../../services/cart-service';
import { ContextCartCount } from '../../../utils/context-cart';
import "./styles.css";

export default function ProductDetails() {

  const params = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState<ProductDTO>();
  
  const {setContextCartCount} = useContext(ContextCartCount);

  useEffect(() => {
    productService.findById(Number(params.productId))
    .then(response => {
      setProduct(response.data);      
    }).catch(() => {
      navigate('/');
    });
  }, [])

  function handleBuyClick() {
    if(product){
      cartService.addProduct(product);
      setContextCartCount(cartService.getCartCount());
      navigate('/cart');
    }
  }

  return (
      <main>
        <section id="product-details-section" className="dsc-container">
          {
            product &&
            <ProductDetailsCard product={product} />
          }
          <div className="dsc-btn-page-container">
            <div onClick={handleBuyClick}>
              <ButtonPrimary text="Comprar" />
            </div>
            <Link to="/">
              <ButtonInverse text="Início" />            
            </Link>
          </div>
        </section>
      </main>
  );
}