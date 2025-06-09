import { ProduitsBanner } from '../produits-banner';
import { ProduitsOverview } from '../produits-overview';
import YonnoviaConstellation from '../YonnoviaConstellation';


// ----------------------------------------------------------------------

export function ProduitsView() {
  return (
    <>
      <ProduitsBanner />
      <ProduitsOverview />
      <YonnoviaConstellation />
    </>
  );
}
