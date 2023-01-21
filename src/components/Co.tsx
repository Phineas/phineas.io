import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import { ExternalLinkIcon } from './Icons';

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 200,
  -(x - window.innerWidth / 2) / 200,
  1.05,
];
const trans = (x: number, y: number, s: number): string =>
  `perspective(200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Co = ({
  url,
  name,
  iconReference,
  tagline,
  role,
  what,
  acquired,
  pretext,
}: {
  url: string;
  name: string;
  iconReference: string;
  tagline: string;
  role: string;
  what: string;
  acquired?: boolean;
  pretext?: string;
}) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 2, tension: 350, friction: 40 },
  }));

  return (
    <A href={url} target="_blank" rel="noopener">
      <Container
        onMouseMove={({ clientX: x, clientY: y }: { clientX: number; clientY: number }) =>
          set({ xys: calc(x, y) })
        }
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        //@ts-ignore
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <Header>
          <img alt={`${name} Logo`} draggable={false} src={iconReference} />
          <div>
            {acquired ? <sub>acquired</sub> : pretext ? <sub>{pretext}</sub> : null}
            <h3>
              {name} <ExternalLinkIcon />
            </h3>
            <span>{tagline}</span>
          </div>
        </Header>
        <Content>
          <h3>Role</h3>
          <p>{role}</p>
          <h3>What I {pretext ? 'Did' : 'Do'}</h3>
          <p>{what}</p>
        </Content>
      </Container>
    </A>
  );
};

const A = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none !important;
  }
`;

const Container = styled(animated.div)`
  border: 1px solid hsl(var(--primary-800));
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.1s ease;
  height: 100%;
  will-change: transform;

  &:hover {
    background-color: hsl(var(--primary-800));
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  border-bottom: 1px solid hsl(var(--primary-800));
  padding: 1rem;
  /* box-sizing: border-box; */

  img {
    width: 70px;
    height: 70px;
    border-radius: 25%;
    margin-right: 1rem;
  }

  div {
    sub {
      text-transform: uppercase;
      color: #ff65b2;
      letter-spacing: 2px;
    }

    h3 {
      margin: 0;
    }

    svg {
      width: 15px;
      height: 15px;
      color: #ccc;
    }

    span {
      color: #ccc;
    }
  }
`;

const Content = styled.div`
  padding: 1rem;
  box-sizing: border-box;
`;

export default Co;
