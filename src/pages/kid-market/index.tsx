import { CONFIG } from 'src/global-config';

import { KidMarketView } from 'src/sections/market/view';

// ----------------------------------------------------------------------

const metadata = { title: `Kid'Market - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>

      <KidMarketView />
    </>
  );
}
