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
        Phin. {/* @ts-ignore */}
        <Tooltip arrow title={'28th December 2001'}>
          {age}
        </Tooltip>{' '}
        y/o developer, innovator and investor.
      </p>
      <p>
        I design, build and publish products of quality and reliability. Currently, I'm working on{' '}
        <a href="https://hop.io" target="norel noopen">
          Hop
        </a>{' '}
        as CEO .
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

      <h3>About Hop</h3>
      <p>
        Backend deployment sucks. Some companies think Kubernetes is the answer, but it actually
        introduces way more complexity and operational overhead than needed. Hop streamlines the
        deployment process: connect your GitHub repository, choose how you want it to run, done. No
        nodes to manage, configs to write, no hassling around. Hop also grows with you, so if you
        need more advanced features & customization later on, we've got you covered.
      </p>

      <h3>About Giggl</h3>
      <p>
        Giggl was what we built before focussing on Hop - we still maintain it and keep it up for
        fun, however it's a side project.
      </p>
      <p>
        Giggl makes the web collaborative via multiplayer browsers. You can spin up a Giggl "portal"
        with someone on the other side of the world, and you'll be able to individually control a
        browser that we host in the cloud which you can use to watch movies together, collaborate on
        projects and everything else the www offers.
      </p>
    </PageWrapper>
  );
};

export default Home;
