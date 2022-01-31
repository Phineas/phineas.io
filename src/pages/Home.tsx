import { useMemo } from 'react';
import { Tooltip } from 'react-tippy';
import PageWrapper from './PageWrapper';

const BIRTH = new Date('2001-12-28T10:15:00Z');
const YEAR_MILLIS = 31556952000;

const Home = () => {
  const age = useMemo(() => Math.floor((Date.now() - BIRTH.getTime()) / YEAR_MILLIS), []);

  return (
    <PageWrapper forceReadableWidth>
      <h1>What I Do</h1>
      <p>
        Phin.{' '}
        <Tooltip arrow title={'28th December 2001'}>
          {age}
        </Tooltip>{' '}
        y/o developer, innovator and investor.
      </p>
      <p>
        I design, build and publish products of quality and reliability. Currently, I'm a co-founder
        and developer at{' '}
        <a href="https://giggl.app" target="norel noopen">
          Giggl
        </a>
        .
      </p>
      <p>
        I specialize in scalable real-time systems & networking, then usually pair that with React
        for the frontend.
      </p>

      <p>
        In my free time, I invest in and help startups with strategy, development, fundraising and
        more. Got a big descision to make? I'm always down to chat to new founders.
      </p>

      <h3>A note about networking</h3>

      <p>
        Network engineering sounds like a mundane and boring topic, but it's actually pretty
        esoteric and interesting when applied on a global scale - it's the backbone of how today's
        society communicates and operates, yet there's not many young developers engaged in the
        topic. Contrary to popular belief, the internet still works and operates on very loose trust
        between people and organizations - I plan to help change this for the better.
      </p>

      <h3>About Giggl</h3>
      <p>
        Giggl is revolutionizing togetherness online using multiplayer browsers. You can spin up a
        Giggl "portal" with someone on the other side of the world, and you'll be able to
        individually control a browser that we host in the cloud which you can use to watch movies
        together, collaborate on projects and everything else the www offers.
      </p>
    </PageWrapper>
  );
};

export default Home;
