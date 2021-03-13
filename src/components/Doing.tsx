import { motion } from "framer-motion";
import { forwardRef, ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import SpotifyLogo from '../assets/images/spotify-logo.svg';
import Progress from "./Progress";

// let progressInterval;

const Doing = ({setActive, ...props}: {setActive: (active: boolean) => void} & any, ref: any) => {
  const [doing, setDoing] = useState<any | null>(null);

  useEffect(() => {
    const queryLanyard = async () => {
      const body = await fetch("https://api.lanyard.rest/v1/users/94490510688792576").then(res => res.json());

      if(body.success) {
        setDoing(body.data);

        if(body.data.listening_to_spotify) setActive(true);
        else setActive(false);
      }
    }
    
    queryLanyard();

    setInterval(() => {
      queryLanyard();
    }, 2500);
  }, []);


  if(!doing) return null;

  return (
    <Container ref={ref} to={"/presence"} {...props}>
      <h5>Listening to Spotify <LiveDot/></h5>
      {doing?.listening_to_spotify ? <>
      <ActivityRow>
        <ActivityImageContainer>
          <ActivityImage src={doing.spotify.album_art_url} />
          <ActivitySecondaryImage src={SpotifyLogo}/>
        </ActivityImageContainer>

        <ActivityInfo>
          <h5>{doing.spotify.song}</h5>
          <p>by {doing.spotify.artist}</p>
        </ActivityInfo>
      </ActivityRow>
      {/* <Progress percentage={doing.spotify.timestamps.end}/> */}
      </> : null}
    </Container>
  )
}

const Container = styled(motion(Link))`
  width: calc(100% + 2rem);
  margin-left: -2rem;
  background-color: transparent;
  color: #ccc;
  border-top: 1px solid #101010;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #101010;
    color: #fff;
  }

  h5 {
    margin: 0;
    margin-bottom: 10px;
  }
`;

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  
  50% {
    opacity: 1;
  }

  100% {
    opacity: 0%;
  }
`;


const LiveDot = styled.div`
  display: inline-block;
  margin-left: 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #ff5252;
  animation: ${fadeInOut} 2s ease-in-out infinite;
`;

const ActivityRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ActivityImageContainer = styled.div`
  position: relative;
  height: 50px;
`;

const ActivityImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 10px;
`;

const ActivitySecondaryImage = styled.img`
  position: absolute;
  bottom: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #000;
  border: 2px solid #000;
`;

const ActivityInfo = styled.div`
  margin-left: 1rem;

  h5 {
    color: #fff;
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 0.8rem;
  }
`;

export default forwardRef(Doing);