import Co from '../components/Co';
import styled from 'styled-components';
import Repo from '../components/Repo';
import Head from 'next/head';
import React from 'react';
import AnimatedPageWrapper from '../layouts/AnimatedPageWrapper';

const Where = () => {
  return (
    <AnimatedPageWrapper>
      <Head>
        <title>Where</title>
      </Head>
      <h1>Where I've Done It</h1>
      <h3>Companies</h3>
      <CoWrapper>
        <Co
          url="https://hop.io"
          name="Hop"
          iconReference={'/assets/images/hop-social-icon.png'}
          tagline="Developer tools"
          role={'CEO, Co-founder & Developer'}
          what={
            'I was tired of the friction and overhead that came with backend deployment. Hop streamlines the deployment experience, with delight included.'
          }
        />
        <Co
          url="https://hiven.io"
          name="Hiven"
          iconReference={'/assets/images/hiven-app-icon.png'}
          tagline="Consumer social"
          role={'Founder & Developer'}
          what={'I founded Hiven back in 2019 to make it easy for anyone to create premium groups.'}
          acquired
        />
        <Co
          url="https://giggl.app"
          name="Giggl"
          iconReference={'/assets/images/giggl-app-icon.jpg'}
          tagline="Consumer social"
          role={'Co-founder & Developer'}
          pretext={'2020-2022'}
          what={
            'I co-founded Giggl back in early 2020 to re-create being together IRL, online. We shifted focus onto Hop.'
          }
        />
        <Co
          role={'Backend Engineer'}
          url="https://honk.me"
          name="Honk"
          iconReference={'/assets/images/honk-app-icon.jpg'}
          tagline="Consumer social"
          pretext={'2020'}
          what={'I helped design and implement the realtime infrastructure at Honk using Elixir.'}
        />
      </CoWrapper>

      <h3>Open-source Projects</h3>
      <Repo
        name={'lanyard'}
        url={'https://github.com/phineas/lanyard'}
        primaryLanguage={'Elixir'}
        description="Expose your Discord presence to an API in <10 seconds (used on this site)"
      />
      <Repo
        name={'domain-lookup-tree'}
        url={'https://github.com/phineas/domain-lookup-tree'}
        primaryLanguage={'Rust'}
        description="A tree structure in Rust optimized for looking up domain names, with wildcard support"
      />
      <Repo
        name={'node_compass'}
        url={'https://github.com/hivenapp/node_compass'}
        primaryLanguage={'Elixir'}
        description="Automatic hash ring management for Elixir nodes"
      />
      <Repo
        name={'phineas.io'}
        url={'https://github.com/phineas/phineas.io'}
        primaryLanguage={'TypeScript'}
        description="This very website"
      />
    </AnimatedPageWrapper>
  );
};

const CoWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 2rem 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 1800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export default Where;
