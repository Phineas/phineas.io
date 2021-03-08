import PageWrapper from "./PageWrapper";
import Co from "../components/Co";
import styled from "styled-components";
import HivenAppIcon from '../assets/images/hiven-app-icon.png';
import GigglAppIcon from '../assets/images/giggl-app-icon.jpg';
import HonkAppIcon from '../assets/images/honk-app-icon.jpg';

const Where = () => {
  return (
    <PageWrapper>
       <h1>where I've done it</h1>
      <CoWrapper>
        <Co name="Hiven" iconReference={HivenAppIcon} tagline="Consumer social" role={"Founder & Developer"} what={"I founded Hiven back in 2019 to make it easy for anyone create premium groups."}/>
        <Co name="Giggl" iconReference={GigglAppIcon} tagline="Consumer social" role={"Co-founder & Developer"} what={"I helped design and create the backend, realtime infrastructure and the frontend."}/>
        <Co name="Honk" iconReference={HonkAppIcon} tagline="Consumer social" role={"Backend Engineer"} what={"I helped design the realtime infrastructure at Honk using Elixir."}/>

      </CoWrapper>
    </PageWrapper>
  )
}

const CoWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 2rem 2rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

export default Where;