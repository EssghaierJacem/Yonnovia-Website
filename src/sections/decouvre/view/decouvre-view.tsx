import { DecouvreBanner } from '../decouvre-banner';
import { DecouvreMission } from '../decouvre-mission';
import { DecouvreFeatured } from '../decouvre-featured';

// ----------------------------------------------------------------------

export function DecouvreMindzkidView() {
  return (
    <>
      <DecouvreBanner />

      <DecouvreMission />

      <DecouvreFeatured />
    </>
  );
}
