import Head from 'next/head';
import AnimatedPageWrapper from '../layouts/AnimatedPageWrapper';

const Presence = () => (
  <AnimatedPageWrapper forceReadableWidth>
    <Head>
      <title>Presence</title>
    </Head>
    <h1>👀 Presence</h1>
    <p>
      You may have noticed that while I'm doing something like listening to Spotify, programming in
      VSCode or playing a game, it'll appear in the bottom left of my site. This is thanks to an
      open-source project I created called{' '}
      <a target="_blank" rel="noreferrer" href={'https://github.com/phineas/lanyard'}>
        Lanyard
      </a>{' '}
      which pulls live presences from Discord and updates an API and WebSocket service. It takes{' '}
      {'<'}10 seconds to set up, you just have to join a Discord server!
    </p>
  </AnimatedPageWrapper>
);

export default Presence;
