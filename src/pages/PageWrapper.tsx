import { motion } from 'framer-motion';
import { ReactElement } from 'react';

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4,
};

const PageWrapper = ({
  children,
  forceReadableWidth,
}: {
  children: ReactElement | ReactElement[];
  forceReadableWidth?: boolean;
}) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{
        maxWidth: forceReadableWidth ? '65ch' : undefined,
        minWidth: 0,
        paddingBottom: '2rem',
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
