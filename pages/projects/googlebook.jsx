import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import GoogleBookProject from './GoogleBookProject';

export const googlebook = () => {
  return (
    <Container>
      <PageHeader 
        pageTitle="Google Book"
        title="GOOGLE BOOK SEARCH ENGINE" 
        subtitleOne="developed via fetch google book api"
      />
      <GoogleBookProject/>
      <Footer middleLabel="back" middleLink="projects/projectlist" rightLabel="learn more" rightLink="https://github.com/panteneyoo/GoogleBook"/>
    </Container>
  )
}

export default googlebook;

