import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import CalculatorProject from './CalculatorProject';

export const calculator = () => {
  return (
    <Container>
      <PageHeader 
        pageTitle="Calculator"
        title="CALCULATOR" 
        subtitleOne="developed by vanilla html/css/javascript"
      />
      <CalculatorProject/>
      <Footer middleLabel="back" middleLink="projects/projectlist" rightLabel="learn more" rightLink="https://github.com/panteneyoo/Calculator"/>
    </Container>
  )
}

export default calculator;

