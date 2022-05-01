import PageWrapper from './PageWrapper';
import Technology from '../components/Technology';
import {
  ElixirLogo,
  RabbitMQLogo,
  ReactLogo,
  RustLogo,
  SolidityLogo,
  TypescriptLogo,
} from '../components/Icons';
import { Helmet } from 'react-helmet';

const How = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>How</title>
      </Helmet>
      <h1>How I Do It</h1>
      <p>
        I highly leverage new bleeding-edge technologies and languages like Elixir to stay on top of
        the game. You can find a list of my most-used technologies below.
      </p>

      <Technology
        color="#9c1fa5"
        icon={<ElixirLogo />}
        name="Elixir"
        type="Realtime, Backend"
        useCase={'Building fault-tolerant realtime systems that scale out across multiple nodes'}
      />

      <Technology
        color="#232340"
        icon={<ReactLogo />}
        name="React"
        type="Frontend framework"
        useCase={'Constructing stateful and durable frontends for large and interactive web apps'}
      />

      <Technology
        color="#dea584"
        icon={<RustLogo />}
        name="Rust"
        type="Backend, System"
        useCase={
          'Optimizing parts of Elixir code using Rust NIFs and writing efficient system code'
        }
      />

      <Technology
        color="#007acc"
        icon={<TypescriptLogo />}
        name="TypeScript"
        type="JS Framework"
        useCase={'Types for JS - will save your life when projects expand'}
      />

      <Technology
        color="#FF6600"
        icon={<RabbitMQLogo />}
        name="RabbitMQ"
        type="Message queue"
        useCase={'Messaging between different services in a robust & durable way'}
      />
    </PageWrapper>
  );
};

export default How;
