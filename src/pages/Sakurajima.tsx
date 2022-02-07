import { Helmet } from 'react-helmet';
import PageWrapper from './PageWrapper';

import Mai from '../assets/images/mai.gif';
import styled from 'styled-components';

const Sakurajima = () => (
  <PageWrapper forceReadableWidth>
    <Helmet>
      <title>sakuraji.ma</title>
    </Helmet>
    <h1>sakuraji.ma</h1>
    <MaiGifImg draggable={false} src={Mai} />
    <p>
      Looks like you've stumbled upon sakuraji.ma! I use this domain as rDNS for the networks & IPs
      I control, and for few NOC/WHOIS management emails. It's short for Mai <b>Sakurajima</b>.
    </p>
    <h2>Authoritative Delegation</h2>
    <p>
      The domains <b>kaede.sakuraji.ma</b> and <b>shoko.sakuraji.ma</b> act as the authorative
      nameservers for the following IP space:
      <ul>
        <li>172.110.130.0/24</li>
        <li>162.218.156.0/24</li>
        <li>2602:fc50::/36</li>
      </ul>
    </p>
  </PageWrapper>
);

const MaiGifImg = styled.img`
  border-radius: 10px;
  max-width: 100%;
`;

export default Sakurajima;
