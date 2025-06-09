import { ServicesBanner } from '../services-banner';
import { ServiceVision } from '../service-vision';
import { ServicesTreeLayout } from '../services-tree-layout';

// ----------------------------------------------------------------------

export function ServicesView() {
  return (
    <>
      <ServicesBanner />
      <ServiceVision />
      <ServicesTreeLayout />
    </>
  );
}
