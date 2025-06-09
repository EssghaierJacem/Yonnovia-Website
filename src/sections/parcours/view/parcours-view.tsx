import { ParcoursBanner } from '../parcours-banner';
import { ParcoursOverview } from '../parcours-overview';
import { ParcoursSteps } from '../parcours-steps';
import { ParcoursBenefits } from '../parcours-benefits';
import { ParcoursTechnology } from '../parcours-technology';
import { ParcoursFeatures } from '../parcours-features';
import { ParcoursComparison } from '../parcours-comparison';

// ----------------------------------------------------------------------

export function ParcoursKidPreneurView() {
  return (
    <>
      <ParcoursBanner />

      <ParcoursOverview />

      <ParcoursSteps />

      <ParcoursBenefits />

      <ParcoursFeatures />

      {/* <ParcoursComparison /> */}

      <ParcoursTechnology />
    </>
  );
}
