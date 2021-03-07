import { motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import SuccessiveType from './components/SuccessiveType';
import Nav from './components/Nav';

function App() {
  const [introEnded, setIntroEnded] = useState(false)

  useEffect(() => {
    const script = document.createElement('script');

    script.src = "/p-static/js/stars.js";
    script.async = true;

    document.body.appendChild(script);


  }, []);

  const onIntroEnd = useCallback(() => {
    setIntroEnded(true);
  }, []);

  return (
    <Wrapper>
      <SuccessiveTypeContainer transition={{ duration: 0.85 }} animate={{y: introEnded ? -window.innerHeight : 0}}>
        <SuccessiveType onEnd={onIntroEnd} words={"Software was meant to feel light and effortless to use. As we're all developing new products so rapidly, bloat in our code is catching up with Moore's law. I design simple but effective, highly-scalable and realtime products for the future."} speed={1}/>
      </SuccessiveTypeContainer>

      <motion.canvas transition={{ duration: 0.85 }} animate={{opacity: introEnded ? 0 : 0.25}} id="stars"/>

      <MainContent transition={{ duration: 0.85 }} style={{y: window.innerHeight}} animate={{y: !introEnded ? window.innerHeight : 0}}>
        <Nav/>
      </MainContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

const SuccessiveTypeContainer = styled(motion.div)`
  width: 50%;
  height: 300px;
`;

const MainContent = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export default App;