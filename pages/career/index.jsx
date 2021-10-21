  
import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import CareerTimeline from './careertimeline';

export const Career = () => {
  return (
    <Container>
      <PageHeader 
        pageTitle="Career History"  
        title="CAREER HISTORY"
        subtitleOne="currently working as"
        subtitleTwo="junior full stack developer @Accenture"
      />
      <CareerTimeline />
      <Footer 
        middleLink="contact"
        rightLabel="check my cv"
        rightLink="https://panteneyoo.github.io/resume/"
      />
    </Container>
  )
}

export default Career;
