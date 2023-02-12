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
          Created by
          <a href="https://github.com/hellene-mary"> &copy; hellene-mary</a> as
          homework for courses GoIt
        </p>
      </Footer>
    </Container>
  );
};

export default Layout;
