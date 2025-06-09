import { CONFIG } from 'src/global-config';

import { DecouvreMindzkidView } from 'src/sections/decouvre/view';

// ----------------------------------------------------------------------

const metadata = { title: `Découvre Mind'z'Kid - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>

      <DecouvreMindzkidView />
    </>
  );
}
