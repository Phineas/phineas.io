import PageWrapper from "./PageWrapper";
import Technology from "../components/Technology";
import { ElixirLogo, ReactLogo, RustLogo } from "../components/Icons"

const How = () => {
  return (
    <PageWrapper>
      <h1>how I do it</h1>
      <p>
        I highly leverage new bleeding-edge technologies and languages like
        Elixir to stay on top of the game. You can find a list of my most-used
        technologies below.
      </p>

      <Technology
        color="#9c1fa5"
        icon={<ElixirLogo/>}
        name="Elixir"
        type="Realtime, Backend"
        useCase={
          "Building fault-tolerant realtime systems that scale out across multiple nodes"
        }
      />

      <Technology
        color="#232340"
        icon={<ReactLogo/>}
        name="React"
        type="Frontend"
        useCase={
          "Constructing stateful and durable frontends for large and interactive web apps"
        }
      />

      <Technology
        color="#dea584"
        icon={<RustLogo/>}
        name="Rust"
        type="Backend, System"
        useCase={
          "Optimizing parts of Elixir code using Rust NIFs and writing efficient system code"
        }
      />
    </PageWrapper>
  );
};

export default How;
