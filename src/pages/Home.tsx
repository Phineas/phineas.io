import PageWrapper from "./PageWrapper";

const Home = () => {
  return (
    <PageWrapper forceReadableWidth>
      <h1>what I do</h1>
      <p>19 y/o developer, innovator and investor.</p>
      <p>
        I design, build and publish products of quality and reliability.
        Currently, I'm a co-founder and developer at{" "}
        <a href="https://hiven.io" target="norel noopen">
          Hiven
        </a>{" "}
        and{" "}
        <a href="https://giggl.app" target="norel noopen">
          Giggl
        </a>
        .
      </p>

      <h3>about Hiven</h3>
      <p>
        At Hiven, we're making it super simple for anyone to create their own
        premium, monetized community while also providing cutting-edge features
        that you wouldn't find on other chat platforms - including end-to-end
        encrypted chat, a built in wallet, advanced developer tools and more.
      </p>

      <h3>about Giggl</h3>
      <p>
        Giggl is revolutionizing togetherness online using multiplayer browsers.
        You can spin up a Giggl "portal" with someone on the other side of the
        world, and you'll be able to individually control a browser that we host
        in the cloud which you can use to watch movies together, collaborate on
        coursework and everything else the www offers.
      </p>
    </PageWrapper>
  );
};

export default Home;
