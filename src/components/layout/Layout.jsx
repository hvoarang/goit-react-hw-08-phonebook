import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Footer, PageContainer } from './Layout.styles';
import Navigation from 'components/navigation/Navigation';

// import { Dna } from 'react-loader-spinner';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>

      <PageContainer>
        <Suspense fallback={null}>
          {/* <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        /> */}
          <Outlet />
        </Suspense>
      </PageContainer>

      <Footer>
        <p>
          homework
          <a href="https://github.com/hvoarang"> &copy; Denys iElkin</a> goit-react-hw-08-phonebook
        </p>
      </Footer>
    </Container>
  );
};

export default Layout;
