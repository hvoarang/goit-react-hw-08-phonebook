import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import UserMenu from 'components/userMenu/UserMenu';
import { Nav, NavAuthBox, NavBox } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <NavBox>
        <Nav to="/">Home</Nav>
        {isLoggedIn ? (
          <Nav to="/contacts">Contacts</Nav>
        ) : (
          <NavAuthBox>
            {!isLoggedIn && <Nav to="/register">Register</Nav>}
            {!isLoggedIn && <Nav to="/login">Log In</Nav>}
          </NavAuthBox>
        )}
        {/* <NavAuthBox>
          {!isLoggedIn && <Nav to="/register">Register</Nav>}
          {!isLoggedIn && <Nav to="/login">Log In</Nav>}
        </NavAuthBox>
        {isLoggedIn && <Nav to="/contacts">Contacts</Nav>} */}
      </NavBox>

      {isLoggedIn && <UserMenu />}
    </>
  );
};

export default Navigation;
