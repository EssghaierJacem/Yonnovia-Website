import { CONFIG } from 'src/global-config';

import { ReseauKidInView } from 'src/sections/reseau/view';

// ----------------------------------------------------------------------

const metadata = { title: `Réseau Kid'In - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>

      <ReseauKidInView />
    </>
  );
}
