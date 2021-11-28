import { motion } from 'framer-motion';
import styled from 'styled-components';

const Progress = ({ percentage }: { percentage: number }) => {
  return (
    <Container>
      <ProgressFill
        initial={false}
        transition={{ ease: 'easeOut', duration: 2 }}
        animate={{ x: `${percentage - 100}%` }}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 5px;
  border: 1px solid #ccc;
  overflow: hidden;
  border-radius: 5px;
`;

const ProgressFill = styled(motion.div)`
  width: 100%;
  height: 5px;
  background-color: #fff;
  transform: translateX(-100%);
`;

export default Progress;
