import editIcon from '../../../assets/edit.svg';
import deleteIcon from '../../../assets/delete.svg';
import { useEffect, useState } from 'react';
import * as productService from '../../../services/product-service';
import { ProductDTO } from '../../../models/product';
import SearchBar from '../../../components/SearchBar';
import ButtonNextPage from '../../../components/ButtonNextPage';
import DialogInfo from '../../../components/DialogInfo';
import DialogConfirmation from '../../../components/DialogConfirmation';
import ButtonInverse from '../../../components/ButtonInverse';
import { useNavigate } from 'react-router-dom';
import './styles.css';

type QueryParams = {
  page: number;
  name: string;
}
export default function ProductListing() {

  const [dialogInfoData, setDialogInfoData] = useState({
    visible: false,
    message: "Operação com sucesso!"
  });

  const [dialogConfirmationData, setDialogConfirmationData] = useState({
    id: 0,
    visible: false,
    message: "Tem certeza?"
  });

  const navigate = useNavigate();

  const [isLastPage, setIsLastPage] = useState(false);

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: ""
  });

  useEffect(() => {
    productService.findPageRequest(queryParams.page, queryParams.name)
    .then(response => {
      const nextPage = response.data.content;
      const lastPage = response.data.last;
      setProducts([...products, ...nextPage]);
      setIsLastPage(lastPage);
    });
  }, [queryParams]);

  function handleSearch(searchText: string) {
    setProducts([]);
    setQueryParams({...queryParams, page: 0, name: searchText});
  }

  function handleNextPageClick() {
    setQueryParams({...queryParams, page: queryParams.page + 1});
  }

  function handleDialogInfoClose() {
    setDialogInfoData({...dialogInfoData, visible: false});
  }  

  function handleDialogConfirmationAnswer(id: number, answer: boolean) {
    if (answer) {
      productService.deleteById(id)
        .then(() => {
          setProducts([]);
          setQueryParams({ ...queryParams, page: 0 });
        }).catch((e) => {
          setDialogInfoData({ ...dialogInfoData, message: e.response.data.error, visible: true });
        });
    }
    setDialogConfirmationData({ ...dialogConfirmationData, visible: false });
  }

  function handleNewProductClick() {
    navigate('/admin/products/create');    
  }

  function handleDeleteClick(id: number) {
    setDialogConfirmationData({...dialogConfirmationData, id, visible: true});
  }

  return (
    <main>
      <section id="product-listing-section" className="dsc-container">
        <h2 className="dsc-section-title dsc-mb20">Cadastro de produtos</h2>
        <div className="dsc-btn-page-container dsc-mb20">
          <div onClick={handleNewProductClick}>
            <ButtonInverse text="Novo" />
          </div>
        </div>
        <SearchBar onSearch={handleSearch} />
        <table className="dsc-table dsc-mb20 dsc-mt20">
          <thead>
            <tr>
              <th className="dsc-tb576">ID</th>
              <th></th>
              <th className="dsc-tb768">Preço</th>
              <th className="dsc-txt-left">Nome</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((product: ProductDTO) => (
                <tr key={product.id}>
                  <td className="dsc-tb576">{product.id}</td>
                  <td><img className="dsc-product-listing-image" src={product.imgUrl} alt={product.name} /></td>
                  <td className="dsc-tb768">R$ {product.price}</td>
                  <td className="dsc-txt-left">{product.name}</td>
                  <td><img className="dsc-product-listing-btn" src={editIcon} alt="Editar" /></td>
                  <td><img className="dsc-product-listing-btn" src={deleteIcon} alt="Deletar" onClick={() => handleDeleteClick(product.id)} /></td>
                </tr>
              ))
            }       
          </tbody>
        </table>
        {
          !isLastPage &&
          <div>
            <ButtonNextPage onNextPage={handleNextPageClick} />
          </div>
        }
      </section>
      {
        dialogInfoData.visible &&
        <DialogInfo 
          message={dialogInfoData.message} 
          onDialogClose={handleDialogInfoClose} 
        />
      }
      {
        dialogConfirmationData.visible &&
        <DialogConfirmation
          id={dialogConfirmationData.id} 
          message={dialogConfirmationData.message} 
          onDialogAnswer={handleDialogConfirmationAnswer} 
        />
      }
    </main>
  );
}