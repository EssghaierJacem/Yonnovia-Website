import { ReseauBanner } from '../reseau-banner';
import { ReseauFeatures } from '../reseau-features';
import { ReseauContent } from '../reseau-content';

// ----------------------------------------------------------------------

export function ReseauKidInView() {
  return (
    <>
      <ReseauBanner />

      <ReseauContent />

      <ReseauFeatures />
    </>
  );
}
