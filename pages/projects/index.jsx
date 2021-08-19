import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import EcommerceProject from './Ecommerce';

export const Project = () => {
  return (
    <Container>
      <PageHeader 
        pageTitle="Featured Project"
        title="_SHOPOLOGY ECOMMERCE WEBSITE" 
        subtitleOne="react frontend project"
        subtitleTwo="supported by firestore database and fake shop api"
      />
      <EcommerceProject/>
      <Footer middleLink="projects/thinkplace" rightLabel="learn more" rightLink="https://github.com/panteneyoo/Ecommerce"/>
    </Container>
  )
}

export default Project;

