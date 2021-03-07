import styled from "styled-components";
import {TwitterLogo} from './Icons';

const Nav = () => {
  return (
    <Container>
      <Title>
        Phineas Walton
      </Title>
      <Page>what I do</Page>
      <Page>where I've done it</Page>
      <Page>how I do it</Page>
      <Page>more + contact</Page>

      <Icons>
        <TwitterLogo/>
      </Icons>
    </Container>
  )
}

const Container = styled.aside`
  display: inline-flex;
  flex-direction: column;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  max-width: 33rem;
  border-right: 1px solid #101010;
  height: 100%;
`;

const Title = styled.div`
  font-weight: 600;
  padding: 10px 0px;
`;

const Page = styled.a`
  color: #ccc;
  padding: 10px 0px;
  display: flex;
`;

const Icons = styled.div`
  margin-top: auto;
  color: #fff;
  fill: #fff;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export default Nav;