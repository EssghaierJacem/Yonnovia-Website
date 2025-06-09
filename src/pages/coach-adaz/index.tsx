import { CONFIG } from 'src/global-config';

import { CoachAdazView } from 'src/sections/coach/view';

// ----------------------------------------------------------------------

const metadata = { title: `Coach ADA'Z - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>

      <CoachAdazView />
    </>
  );
}
