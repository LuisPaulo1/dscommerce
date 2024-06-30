import { Link, useNavigate } from 'react-router-dom';
import * as authService from '../../services/auth-service';
import { useContext } from 'react';
import { ContextToken } from '../../utils/context-token';

export default function LoggedUser() {

  const { contextTokenPayload, setContextTokenPayload } = useContext(ContextToken);

  const navegate = useNavigate();

  function handleLogoutClick() {
    authService.logout();
    setContextTokenPayload(undefined);
    navegate('/login');
  }

  return (
    authService.isAuthenticated()
      ? (
        <div className="dsc-logged-user">
          <p>{contextTokenPayload?.user_name}</p>
          <span onClick={handleLogoutClick}>Sair</span>
        </div>
      )
      :
      (
        <Link to="/login">
          Entrar
        </Link>
      )
  );
}