import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Footer, PageContainer } from './Layout.styles';
import Navigation from 'components/navigation/Navigation';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>

      <PageContainer>
        <Suspense fallback={null}>
          {}
          <Outlet />
        </Suspense>
      </PageContainer>

      <Footer>
        <p>
          homework
          <a href="https://github.com/hvoarang"> Denys iElkin</a> goit-react-hw-08-phonebook
        </p>
      </Footer>
    </Container>
  );
};

export default Layout;
