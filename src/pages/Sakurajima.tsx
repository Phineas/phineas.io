import { Helmet } from "react-helmet";
import PageWrapper from "./PageWrapper";

import Mai from "../assets/images/mai.gif";
import styled from "styled-components";

const Sakurajima = () => (
  <PageWrapper forceReadableWidth>
    <Helmet>
      <title>sakuraji.ma</title>
    </Helmet>
    <h1>sakuraji.ma</h1>
    <MaiGifImg draggable={false} src={Mai} />
    <p>
      Looks like you've stumbled upon sakuraji.ma! I use this domain as a
      catch-all email address for a few services. It's short for Mai{" "}
      <b>Sakurajima</b>.
    </p>
  </PageWrapper>
);

const MaiGifImg = styled.img`
  border-radius: 10px;
`;

export default Sakurajima;
