import { motion, PanInfo } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ChevronDown, GitHubLogo, KeyIcon, TwitterLogo } from "./Icons";
import IconButton from './IconButton';
import useSound from "use-sound";

const pathnameOffsets: { [key: string]: number } = {
  "/": 0,
  "/where": 39,
  "/how": 78,
  "/etc": 117,
};

const Nav = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const [playSwitchPageSound] = useSound('/p-static/sounds/switch-page.mp3');

  const [dragYOffset, setDragYOffset] = useState(0);

  const dragConstraintsRef = useRef(null);

  useEffect(() => {
    playSwitchPageSound();
  }, [pathname])

  const pageIndicatorOffset = useMemo(
    () => (pathname ? pathnameOffsets[pathname] : 0),
    [pathname]
  );

  const pageIndicatorOffsetWithDecoration = useMemo(
    () => 71 + pageIndicatorOffset - dragYOffset,
    [pageIndicatorOffset, dragYOffset]
  );

  const onPageIndicatorDragEnd = useCallback(
    (_event, info: PanInfo) => {
      const goal = pageIndicatorOffset + info.offset.y;

      const closest = Object.entries(pathnameOffsets).reduce(
        ([prevPath, prevOffset], [curPath, curOffset]) => {
          return Math.abs(curOffset - goal) < Math.abs(prevOffset - goal)
            ? [curPath, curOffset]
            : [prevPath, prevOffset];
        }
      );

      if (closest[0] === pathname) return;

      console.log(info);
      setDragYOffset(dragYOffset + info.offset.y + info.velocity.y);
      history.push(closest[0]);
    },
    [history, pageIndicatorOffset, dragYOffset, pathname]
  );

  return (
    <Container>
      <PageIndicator
        whileHover={{ width: 3 }}
        drag="y"
        onDragEnd={onPageIndicatorDragEnd}
        dragConstraints={dragConstraintsRef}
        animate={{ top: pageIndicatorOffsetWithDecoration }}
      />
      <Items>
        <Row>
          <Title>Phineas Walton</Title>
          <IconButton>
            <ChevronDown/>
          </IconButton>
        </Row>
        <div ref={dragConstraintsRef}>
          <Page active={pathname === "/"} to="/">
            what I do
          </Page>
          <Page active={pathname === "/where"} to="/where">
            where I've done it
          </Page>
          <Page active={pathname === "/how"} to="/how">
            how I do it
          </Page>
          <Page active={pathname === "/etc"} to="/etc">
            more + contact
          </Page>
        </div>

        <Icons>
          <TwitterLogo />
          <GitHubLogo />
          <KeyIcon />
        </Icons>
      </Items>
    </Container>
  );
};

const Container = styled.aside`
  display: inline-block;
  box-sizing: border-box;
  flex-direction: column;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 15rem;
  border-right: 1px solid #101010;
  height: 100vh;
`;

const PageIndicator = styled(motion.div)`
  width: 1px;
  height: 39px;
  background-color: #fff;
  position: absolute;
  right: -1px;
  cursor: pointer;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: 600;
  padding: 10px 0px;
`;

const Page = styled(Link)<{ active: boolean }>`
  color: ${({ active }) => (active ? "#fff" : "#ccc")};
  padding: 10px 0px;
  display: flex;

  &:hover {
    /* background-color: #fff; */
    color: #fff;
  }
`;

const Icons = styled.div`
  margin-top: auto;
  color: #ccc;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;

    &:hover {
      color: #fff;
    }
  }
`;

export default Nav;
