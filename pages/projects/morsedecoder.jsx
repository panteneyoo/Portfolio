import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import MorseDecoderProject from './MorseDecoderProject';

export const morsedecoder = () => {
  return (
    <Container>
      <PageHeader 
        pageTitle="Morse Decoder"
        title="MORSE DECODER" 
        subtitleOne="dual decoder Morse Code <=> English"
        subtitleTwo="developed by vanilla html/css/javascript"
      />
      <MorseDecoderProject/>
      <Footer middleLabel="back" middleLink="projects/projectlist" rightLabel="learn more" rightLink="https://github.com/panteneyoo/MorseDecoder"/>
    </Container>
  )
}

export default morsedecoder;

