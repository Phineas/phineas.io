import { ReactElement } from "react";
import styled from "styled-components";
import { ElixirLogo } from "./Icons";

const Technology = ({
  color,
  icon,
  name,
  type,
  useCase,
}: {
  color: string;
  icon: ReactElement;
  name: string;
  type: string;
  useCase: string;
}) => {
  return (
    <Container>
      <Head color={color}>{icon}</Head>

      <Column forceWidth={80}>
        <h5>name</h5>
        <p>{name}</p>
      </Column>
      <Column forceWidth={200}>
        <h5>type</h5>
        <p>{type}</p>
      </Column>
      <Column noBorder>
        <h5>use case</h5>
        <p>{useCase}</p>
      </Column>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  border: 1px solid #101010;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const Head = styled.div<{ color: string }>`
  height: 100%;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  fill: #fff;
  background-color: ${({ color }) => color};

  svg {
    height: 30px;
    width: 30px;
  }
`;

const Column = styled.div<{ forceWidth?: number; noBorder?: boolean }>`
  height: 100%;
  width: ${({ forceWidth }) =>
    forceWidth ? forceWidth + "px" : "fit-content"};
  min-width: ${({ forceWidth }) => forceWidth};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid
    ${({ noBorder }) => (noBorder ? "transparent" : "#101010")};
  padding: 1rem;
  box-sizing: border-box;

  h5 {
    font-family: "Courier New";
    margin: 0;
    color: #fff;
  }

  p {
    margin: 0;
  }
`;

export default Technology;
