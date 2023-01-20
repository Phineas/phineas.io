import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import PageWrapper from './PageWrapper';

const Etc = () => (
  <PageWrapper forceReadableWidth>
    <Helmet>
      <title>/etc</title>
    </Helmet>
    <h1>/etc</h1>
    <h2>Thanks</h2>
    <p>
      Thanks for visiting. I hope you enjoyed your stay. The source code for this website is
      available at <a href={'https://github.com/phineas/phineas.io'}>phineas/phineas.io</a>
    </p>
    <h2>Contact</h2>
    <p>
      I'm most responsive through Twitter DMs, you can{' '}
      <a href={'https://twitter.com/messages/compose?recipient_id=102583719'}>click here</a> to DM
      me on Twitter.
    </p>
    <p>
      If your inquiry is related to a network I manage or control (e.g. AS952 or AS399531), please
      send an email to my email listed on the respective WHOIS contact. If it's an emergency, you
      can email <a href="mailto:ops@sakuraji.ma">ops@sakuraji.ma</a>.
    </p>
    <h2>Other</h2>
    <ul>
      <li>
        <Link to={'/presence'}>/presence</Link>
      </li>
      <li>
        <a href={'https://phin.vc'}>phin.vc</a>
      </li>
      <li>
        PGP Fingerprint: <code>D740 E413 3A74 815E F5B6 F11B AF8B EE0C CF1D 0E46</code>
      </li>
      <li>
        Primary ETH Address: <code>phin.eth (0xd3AbB464df46568d1E72Fa5F156F05458f1AB26e)</code>
      </li>
    </ul>
  </PageWrapper>
);

export default Etc;
