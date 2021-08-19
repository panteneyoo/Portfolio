import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import FeaturedProject from './FeaturedProject';

export const thinkplace = () => {
  return (
    <Container>
      <PageHeader 
        pageTitle="Featured Projects"
        title="AUSTRALIAN CHILDREN VACCINATION INSIGHTS" 
        subtitleOne="featured data/ML project"
        subtitleTwo="policy sentiment analysis"
      />
      <FeaturedProject />
      <Footer middleLink="skills" rightLabel="more projects" rightLink="/projects/projectlist"/>
    </Container>
  )
}

export default thinkplace;