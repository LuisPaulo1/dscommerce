import LoggedUser from '../../components/LoggedUser';
import homeIcon from '../../assets/home.svg';
import productsIcon from '../../assets/home.svg';
import { Link } from 'react-router-dom';
import './styles.css';

export default function HeaderAdmin() {
  return (
    <header className="dsc-header-admin">
      <nav className="dsc-container">
        <h1>DSC Admin</h1>
        <div className="dsc-navbar-right">
          <div className="dsc-menu-items-container">
            <div className="dsc-menu-item">
              <Link to="/admin">
                <img src={homeIcon} alt="Início" />
                <p>Início</p>
              </Link>
            </div>
            <div className="dsc-menu-item">
              <Link to="/admin/products">
                <img src={productsIcon} alt="Cadastro de produtos" />
                <p className="dsc-menu-item-active">Produtos</p>
              </Link>
            </div>
          </div>
          <LoggedUser />
        </div>
      </nav>
    </header>
  );
}