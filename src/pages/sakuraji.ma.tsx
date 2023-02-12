import Head from 'next/head';
import Image from 'next/image';

import styled from 'styled-components';
import { SakurajimaLogo } from '../components/Icons';
import AnimatedPageWrapper from '../layouts/AnimatedPageWrapper';

const Sakurajima = () => (
  <AnimatedPageWrapper forceReadableWidth>
    <Head>
      <title>sakuraji.ma</title>
    </Head>
    <Title>
      <SakurajimaLogo /> sakuraji.ma
    </Title>

    <MaiGifImg src={'/assets/images/mai.gif'} />

    <p>
      Looks like you've stumbled upon sakuraji.ma! I use this domain as rDNS for the networks & IPs
      I control, and for a few NOC/WHOIS management emails. It's short for Mai <b>Sakurajima</b>.
    </p>
    <h2>Authoritative Delegation</h2>
    <p>
      The domains <b>kaede.sakuraji.ma</b> and <b>shoko.sakuraji.ma</b> act as the authorative
      nameservers for the following IP space:
    </p>
    <ul>
      <li>172.110.130.0/24</li>
      <li>162.218.156.0/24</li>
      <li>2602:fc50::/36</li>
    </ul>
  </AnimatedPageWrapper>
);

const MaiGifImg = styled.img`
  border-radius: 10px;
  width: 100%;
`;

const Title = styled.h1`
  vertical-align: middle;
  display: flex;
  align-items: center;
  svg {
    height: 1em;
    margin-right: 0.5em;
    /* width: 1em; */
  }
`;

export default Sakurajima;
