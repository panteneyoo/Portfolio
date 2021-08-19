import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';
import ContactInfo from './ContactInfo';
import Footer from '../../components/Footer';
import globalStyles from '../../styles/styles.module.scss';
import { BsHeart } from 'react-icons/bs';

export const Contact = () => {
  const LeftFooter = () => <div className={globalStyles.navStyle}>made with <BsHeart size={12}/></div>

  return (
    <Container>
      <PageHeader 
        pageTitle="Contact"  
        title="CONTACT"
      />
      <ContactInfo />
      <Footer leftLabel={<LeftFooter />} rightLabel="source" rightLink="https://github.com/panteneyoo/portfolio"/>
    </Container>
  )
}

export default Contact;