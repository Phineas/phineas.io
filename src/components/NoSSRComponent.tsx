import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

const RenderChild = (props: { children: ReactNode }) => <>{props.children}</>;

const NoSSRComponent = dynamic(async () => RenderChild, {
  ssr: false,
});

export default NoSSRComponent;
