import { MarketBanner } from '../market-banner';
import { MarketFeatures } from '../market-features';
import { MarketContent } from '../market-content';

// ----------------------------------------------------------------------

export function KidMarketView() {
  return (
    <>
      <MarketBanner />

      <MarketContent />

      <MarketFeatures />
    </>
  );
}
