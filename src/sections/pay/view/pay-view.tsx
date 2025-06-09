import { PayBanner } from '../pay-banner';
import { PayFeatures } from '../pay-features';
import { PayContent } from '../pay-content';

// ----------------------------------------------------------------------

export function KidPayView() {
  return (
    <>
      <PayBanner />

      <PayContent />

      <PayFeatures />
    </>
  );
}
