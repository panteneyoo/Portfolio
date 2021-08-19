import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import ListProject from './List';

export const projectlist = () => {
  return (
    <Container>
      <PageHeader 
        pageTitle="Projects"
        title="PROJECT LIST" 
      />
      <ListProject />
      <Footer middleLink="skills" rightLabel="back" rightLink="/projects/thinkplace"/>
    </Container>
  )
}

export default projectlist;