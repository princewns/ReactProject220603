import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const LayOut = () => {
  const data = useContext(DataContext);
  const navigator = useNavigate();

  return (
    <div>
      <Navbar bg="primary" variant='dark'>
        <Container>
          <Navbar.Brand href="#home">SHOP</Navbar.Brand>
            <Nav className="me-auto">
              <NavLink className='nav-link' to='/'>Home</NavLink>
            </Nav>
            {data.state.user ? (
              //로그인일때 보이는 화면
            <Nav>
              <NavLink className='nav-link' to='/mypage'>Mypage</NavLink>
              <Button onClick={
                () => {
                  data.action.setUser(null);
                  navigator('/');
                }
              }>Logout</Button>
            </Nav>) : (
              //로그아웃일때 보이는 화면
              <Nav>
                <NavLink className='nav-link' to='/loginform'>Login</NavLink>
              </Nav>
            )}
        </Container>
      </Navbar>
      <main className='m-5'>
        <Outlet></Outlet>
      </main>

      <footer className='main-footer'>
        <div>
          <p>&copy; 응애</p>
        </div>
      </footer>
    </div>
  );
};
export default LayOut;