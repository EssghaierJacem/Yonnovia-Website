import { CONFIG } from 'src/global-config';

import { AboutView } from 'src/sections/about/view';

// ----------------------------------------------------------------------

const metadata = { title: `A Propos - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>

      <AboutView />
    </>
  );
}
