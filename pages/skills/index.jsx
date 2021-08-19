import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import Tech from "./Tech";


export const Skills = () => {
  return (
    <Container>
      <PageHeader 
        pageTitle="Tech Stack"  
        title="TECH STACK"
      />
      <Tech />
      <Footer 
        middleLink="career"
      />
    </Container>
  )
}

export default Skills