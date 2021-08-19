import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import MothdxProject from './MothdxProject';

export const mothdx = () => {
  return (
    <Container>
      <PageHeader 
        pageTitle="Mothdx LIMS"
        title="MOTHDX COVID REAGENT LIMS" 
        subtitleOne="lab data management system for covid reagent and products"
        subtitleTwo="developed endpoints for backend RESTful database api, enabled query search, pubChem auto-mapping features"
      />
      <MothdxProject/>
      <Footer middleLabel="back" middleLink="projects/projectlist" rightLabel="Contact for details" rightLink="/contact"/>
    </Container>
  )
}

export default mothdx;

