import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import RaidenProject from './RaidenProject';

export const raiden = () => {
  return (
    <Container>
      <PageHeader 
        pageTitle="Android Raiden"
        title="RAIDEN GAME DEMO" 
        subtitleOne="developed by Java on AndroidStudio and Gradle framework"
      />
      <RaidenProject/>
      <Footer middleLabel="back" middleLink="projects/projectlist" rightLabel="learn more" rightLink="https://github.com/panteneyoo/AndriodGame-Raiden"/>
    </Container>
  )
}

export default raiden;

