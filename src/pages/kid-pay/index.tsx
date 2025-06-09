import { CONFIG } from 'src/global-config';

import { KidPayView } from 'src/sections/pay/view';

// ----------------------------------------------------------------------

const metadata = { title: `Kid'Pay - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>

      <KidPayView />
    </>
  );
}
